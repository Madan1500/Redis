
const client = require("./client");

const hashmapInit = async () => {
    const set1 = await client.hset("user:1", "name", "John");
    const set2 = await client.hset("user:1", "age", 30);
};
