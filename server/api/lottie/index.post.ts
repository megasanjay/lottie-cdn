import { nanoid } from "nanoid";
import { z } from "zod";
import protectRoute from "../../utils/protectRoute";

export default defineEventHandler(async (event) => {
  const user = await protectRoute(event);

  const bodySchema = z
    .object({
      name: z.string().nonempty(),
      description: z.string().optional(),
      jsonData: z.string(),
      originalAnimationUrl: z.string().min(0).optional(),
    })
    .strict();

  const body = await readBody(event);

  // Check if the body is present
  if (!body) {
    throw createError({
      message: "Missing required fields",
      statusCode: 400,
    });
  }

  // Check if the body is valid
  const parsedBody = bodySchema.safeParse(body);

  if (!parsedBody.success) {
    console.log(parsedBody.error);

    throw createError({
      message: "The provided parameters are invalid",
      statusCode: 400,
    });
  }

  const { name, description, jsonData, originalAnimationUrl } = parsedBody.data;

  const assetId = nanoid();

  // convert the json data into a file to be uploaded
  const jsonFile = new File([jsonData], `${assetId}.json`, {
    type: "application/json",
  });

  // upload the json file to the bunny bucket
  const uploadResponse = await fetch(
    `https://storage.bunnycdn.com/${process.env.BUNNY_STORAGE_BUCKET_NAME}/assets/${assetId}.json`,
    {
      body: jsonFile,
      headers: {
        AccessKey: process.env.BUNNY_STORAGE_ACCESS_KEY,
        ContentType: "application/json",
      },
      method: "PUT",
    },
  );

  if (!uploadResponse.ok) {
    throw createError({
      message: "Failed to upload the lottie json file",
      statusCode: 500,
    });
  }

  // Save the lottie animation to the database
  const lottieAnimation = await prisma.Lottie.create({
    data: {
      id: assetId,
      name,
      created_by: user.userId,
      description,
      original_animation_url: originalAnimationUrl || "",
    },
  });

  if (!lottieAnimation) {
    throw createError({
      message: "Failed to save the lottie animation to the database",
      statusCode: 500,
    });
  }

  return {
    id: lottieAnimation.id,
    statusCode: 200,
  };
});
