const credentials = require("./credentials");
const fs = require("fs");
const appstate = fs.readFileSync("./appstate.json","utf-8");
mem = require("memjs").Client.create(credentials.MEMCACHIER_SERVERS, {
        "username": credentials.MEMCACHIER_USERNAME,
        "password": credentials.MEMCACHIER_PASSWORD
    });
    mem.set("appstate", appstate, {}, merr =>{
    if (err) {
        return console.error(merr);
    } else {
        callback(err, api);
    }
});
