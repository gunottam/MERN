import express from 'express';

const app = express();

app.get("/products", (req, res) => {

});
app.listen(2000, () => {
    console.log(`Server running on port http://localhost:2000`);
});

//