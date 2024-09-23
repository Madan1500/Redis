const client = require("./client");
const express = require("express");
const axios = require("axios").default;

const app = express();

app.get("/api", async (req, res) => {
    const cachedData = await client.get("comments");
    if(cachedData){
        return res.send(JSON.parse(cachedData));
    } else {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        await client.set("comments", JSON.stringify(response.data));
        await client.expire("comments", 60);
        res.send(response.data);
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});