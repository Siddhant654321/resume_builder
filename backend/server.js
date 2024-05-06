import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import path from "path";

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true
};

const app = express();

connectDB();

app.options('*', cors(corsOptions));
app.use(cors(corsOptions))

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

const __dirname = path.resolve();

// Serve static files and handle SPA routing in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "dist", "index.html")),
  );
} else {
  // Development-specific settings
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
