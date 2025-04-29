import jwt from "jsonwebtoken";

const userAuthentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Get token from Bearer <token>

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      success: false,
      error: true,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET || "cp123", (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message:
          error.name === "TokenExpiredError"
            ? "Token has expired, please sign in again"
            : "Invalid token",
        success: false,
        error: true,
      });
    }

    // Store user data in req.user
    req.user = decoded;
    next();
  });
};

export default userAuthentication;

