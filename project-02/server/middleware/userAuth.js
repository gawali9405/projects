import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const userAuthentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      success: false,
      error: true,
    });
  }

  jwt.verify(token, process.env.SECRET_KEY || gawali150, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message:
          error.name === "TokenExpiredError"
            ? "Token expired"
            : "Invalid token",
        success: false,
        error: true,
      });
    }
    req.user = decoded;
    next();
  });
};

export default userAuthentication;
