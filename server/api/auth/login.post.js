import { getUserByUsername } from "~/server/dp/users";
import bcrypt from "bcrypt";
import { generateTokens } from "~/server/utils/jwt";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }
  //is user registered
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "username or password is invalid",
      })
    );
  }
  // compare passwords
  const doesPasswordMAtch = await bcrypt.compare(password, user.password);
  // generate tokens
  //access token
  //refresh token
  const { accessToken, refreshToken } = generateTokens();

  return {
    user: user,
    doesPasswordMAtch,
  };
});
