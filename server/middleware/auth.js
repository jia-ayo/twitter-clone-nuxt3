import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../dp/users";
export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/user",
    "/api/user/tweets",
    "/api/tweets",
    "/api/tweets/:id",
  ];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(event.node.req.url);
  });
  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  const decode = decodeAccessToken(token);

  if (!decode) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "unautorized",
      })
    );
  }

  try {
    const userId = decode.userId;
    const user = await getUserById(userId);
    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
