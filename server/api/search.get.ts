export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const response: any = await $fetch(
    `https://search.lottiel.ink/indexes/lotties/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MEILISEARCH_SEARCH_API_KEY}`,
      },
      body: JSON.stringify({
        q: query.q,
      }),
    },
  );

  if (!response) {
    throw createError({
      message: "Something went wrong",
      statusCode: 404,
    });
  }

  return response["hits"];
});
