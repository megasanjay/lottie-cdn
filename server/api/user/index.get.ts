import protectRoute from "../../utils/protectRoute";

export default defineEventHandler(async (event) => {
  const user = await protectRoute(event);

  console.log("user", user);

  return {
    user,
  };
});
