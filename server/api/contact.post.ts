import { z } from "zod";

export default defineEventHandler(async (event) => {
  const bodySchema = z
    .object({
      email: z.string().email(),
      subject: z.string().nonempty(),
      message: z.string().nonempty(),
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
    throw createError({
      message: "The data you have provided is invalid",
      statusCode: 400,
    });
  }

  const { email, subject, message } = parsedBody.data;

  const messageToSave = await prisma.contact.create({
    data: {
      email,
      subject,
      message,
    },
  });

  if (!messageToSave) {
    throw createError({
      message: "Failed to save the message",
      statusCode: 500,
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Message saved",
    }),
  };
});
