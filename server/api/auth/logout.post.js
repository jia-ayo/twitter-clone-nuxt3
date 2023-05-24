import { removeRefreshtoken } from "~/server/dp/refreshTokens";
import { sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  try {
    const cookies = useCookie(event);
    const refreshToken = cookies.refresh_token;
    await removeRefreshtoken(refreshToken);
  } catch (error) {}

  sendRefreshToken(event.node.res, null);
  return { message: "Done" };
});
