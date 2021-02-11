const credentials = require("./credentials");
const fs = require("fs");
const appstate = fs.readFileSync("./appstate.json","utf-8");
mem = require("memjs").Client.create(credentials.MEMCACHIER_SERVERS, {
        "username": credentials.MEMCACHIER_USERNAME,
        "password": credentials.MEMCACHIER_PASSWORD
    });
    var merr;
    mem.set("appstate", appstate, {}, merr =>{
        if (Error) {
            var merr = 'Đã đưa appstate lên memcachier'
            return console.error(merr);
        } else {
            callback(err, api);
        }
    });