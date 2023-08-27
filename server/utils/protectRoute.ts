// If the user does not exist on the request, throw a 401 error
export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);

  const session = await authRequest.validate();

  if (!session || !session.user) {
    throw createError({
      message: "Unauthorized",
      statusCode: 401,
    });
  }

  return session.user;
});
