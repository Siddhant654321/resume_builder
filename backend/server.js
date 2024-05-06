import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))