import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";

export const authUser = async (req, res, next) => {
  try {
    let token;

    // ✅ SAFELY read token
    if (req.cookies?.token) {
      token = req.cookies.token;
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ error: "Unauthorized User" });
    }

    // ✅ check blacklist
    const isBlackListed = await redisClient.get(token);
    if (isBlackListed) {
      res.clearCookie("token");
      return res.status(401).json({ error: "Unauthorized User" });
    }

    // ✅ verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    // ✅ HANDLE EXPIRED TOKEN CLEANLY
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Token expired. Please login again",
      });
    }

    console.error("Auth middleware error:", error.message);
    return res.status(401).json({ error: "Unauthorized User" });
  }
};
