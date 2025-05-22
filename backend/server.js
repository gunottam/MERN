import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
        
});

console.log(process.env.MONGO_URI);

app.listen(2000, () => {
    console.log(`Server running on port http://localhost:2000`);
});

