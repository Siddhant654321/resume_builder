import Jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect routes
const protect = async(async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.token;

  if (token) {
    try {
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
