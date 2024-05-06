import jwt from "jsonwebtoken";

const generateToken = (res, user, isRememberMe) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: isRememberMe ? "30d" : "1d",
  });

  user.tokens.push(token);

  // Set JWT as HTTP-Only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: isRememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 24,
  });
};

export default generateToken;
