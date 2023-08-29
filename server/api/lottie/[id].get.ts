export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };

  if (!id) {
    throw createError({
      message: "Missing required fields",
      statusCode: 400,
    });
  }

  const response = await prisma.lottie.findUnique({
    where: {
      id,
    },
    select: {
      id: true,

      name: true,
      description: true,
      original_animation_url: true,

      created_at: true,
      created_by: true,
    },
  });

  if (!response) {
    throw createError({
      message: "Lottie animation not found",
      statusCode: 404,
    });
  }

  return response;
});
