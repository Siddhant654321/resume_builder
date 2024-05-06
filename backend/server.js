import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true
};

const app = express();

app.options('*', cors(corsOptions));
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))