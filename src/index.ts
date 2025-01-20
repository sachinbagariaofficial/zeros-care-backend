import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import productRouter from "./routes/productRouter";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use("/product", productRouter)


app.all("/", (req, res) => {
    res.status(200).send("You have connected to zrso-care")
});



// Connect to the database and start the server
connectDB()
    .then(() => {

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });
