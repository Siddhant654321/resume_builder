import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user, isRememberMe);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const user = await User.findOne({ tokens: { $in: [token] } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Remove the token from the user's tokens array
  user.tokens = user.tokens.filter((t) => t !== token);
  await user.save();

  // Clear the token cookie
  res.clearCookie("token");

  res.status(200).json({ message: "Logged out successfully!" });
};

export { authUser, registerUser, logoutUser };
