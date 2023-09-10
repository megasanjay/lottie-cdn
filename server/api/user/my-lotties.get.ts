import protectRoute from "../../utils/protectRoute";

export default defineEventHandler(async (event) => {
  const user = await protectRoute(event);

  const userId = user.userId;

  const response = await prisma.lottie.findMany({
    select: {
      id: true,
      created_at: true,
    },
    where: {
      created_by: userId,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  if (!response) {
    throw createError({
      message: "Lottie animations not found",
      statusCode: 404,
    });
  }

  return response;
});
