/**
 * Created by Yigit Yesilpinar on 1.05.2017.
 */
var fs = require('fs');
var chalk = require('chalk');
/* eslint-disable no-console */

function copyFile(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
        done(err);
    });
    wr.on("close", function(ex) {
        done();
    });
    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

if(!fs.existsSync("./out")){
    fs.mkdirSync("out");
}

// copy paste index.html from build/index.html to out/index.html
copyFile('build/index.html', 'out/index.html', function(err){
    if(err){
        return console.log(chalk.red.bold("Could not move/copy file -> build/index.html"));
    }

    console.log(chalk.green.bold("index.html copied to out/index.html"));
});
// copy paste, read write, move favicon to /out folder
copyFile('build/favicon.ico', 'out/favicon.ico', function(err){
    if(err){
        return console.log(chalk.red.bold("Could not move/copy file ->  build/favicon.ico"));
    }

    console.log(chalk.green.bold("favicon.ico copied to out/favicon.ico"));
});


// copy paste production package.json from build/package.json to out/package.json
copyFile('build/package.json', 'out/package.json', function(err){
    if(err){
        return console.log(chalk.red.bold("Could not move/copy file -> build/package.json"));
    }

    console.log(chalk.green.bold("Production package.json copied to out/package.json"));
});

// copy paste production server.js from build/server.js to out/server.js
copyFile('build/server.js', 'out/server.js', function(err){
    if(err){
        return console.log(chalk.red.bold("Could not move/copy file -> build/server.js"));
    }

    console.log(chalk.green.bold("Production server.js copied to out/server.js"));
});


