export default defineEventHandler(async (event) => {
  // Get all the lottie animations
  const response = await prisma.lottie.findMany({
    select: {
      id: true,

      created_at: true,
      created_by: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  if (!response) {
    throw createError({
      message: "Lottie animation not found",
      statusCode: 404,
    });
  }

  // duplicate the response array

  return response;
});
