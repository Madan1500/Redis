const client = require('./client');

async function sinit() {
    // nx: only set the key if it does not already exist
    // const set1 = await client.set("bike:1", "Yamaha", "nx");
    // console.log(set1); // OK
    // // xx: only set the key if it already exist
    // const set2 = await client.set("bike:1", "Farari", "xx");
    // console.log(set2); // OK


    // Multiple set
//    const res5 = await client.mset("book:1", "Harry Potter", "book:2", "The Lord of the Rings", "book:3", "The Hobbit");

//     // Get value
//     const res1 = await client.mget("book:1", "book:2", "book:3");
    // console.log(res1); // [ 'Harry Potter', 'The Lord of the Rings', 'The Hobbit' ]

    // Set count
    const res2 = await client.set("count", 0);
    // Increment count
    const res3 = await client.incr("count");
    // Incrby count
    const res4 = await client.incrby("count", 5);
    console.log(res4); // 6

    await client.quit();
}

sinit();