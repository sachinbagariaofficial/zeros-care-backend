const express = require("express");
const dotenv = require("dotenv");

dotenv.config()
const app = express();
const port = process.env.PORT || 4000

app.get("/sachin", (req: any, res: any) => {
    res.status(200).send("hello world")
});

app.listen(3000, () => {
    console.log(`Example app listening on port${port} `)
})