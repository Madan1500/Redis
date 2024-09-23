const client = require("./client");

const listInit = async () => {
    const set1 = await client.lpush("message", "Hello");
    const set2 = await client.lpush("message", "World");
    const set3 = await client.rpush("message", "Goodbye");

    // Brings data of the list 0 to -1
    const res1 = await client.lrange("message", 0, -1);
    console.log(res1); 

    const res2 = await client.lpop("message");
    console.log(res2); 

    const res3 = await client.rpop("message");
    console.log(res3);

    const res4 = await client.lindex("message", 0);
    console.log(res4);

    const res5 = await client.llen("message");
    console.log(res5);

    const res6 = await client.linsert("message", "before", "World", "Hello");
    console.log(res6);

    // lrem this command is used to remove the first count occurrences of elements equal to value from the list stored at key.
    await client.lrem("message", 0, "World");

    // lmove this command is used to move an element from one list to another.
    const res7 = await client.lpush("message", "Hello");
    const res8 = await client.lpush("message", "World");
    const res9 = await client.lpush("message", "Goodbye");
    const res10 = await client.lmove("message", "message2", "LEFT", "RIGHT");
    console.log(res10);

    const res11 = await client.blpop("message",20);
    console.log(res11);

    await client.quit();
};

listInit();