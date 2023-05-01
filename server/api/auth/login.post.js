import { getUserByUsername } from "~/server/dp/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/dp/refreshTokens";
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

  if (!doesPasswordMAtch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "username or password is invalid",
      })
    );
  }
  // generate tokens
  //access token
  //refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  //save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  //add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_Token: accessToken,
    user: userTransformer(user),
  };
});
