import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from "cookie-parser";

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true
};

const app = express();

app.options('*', cors(corsOptions));
app.use(cors(corsOptions))

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))