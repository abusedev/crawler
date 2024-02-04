const logger = require('./prettylog.js');
const fs = require('fs');
const path = require('path');

function sortPages(pages)
{
    var arr = Object.entries(pages); // easier to parse arrays
    arr.sort((one, two) =>
    {
        oneHit = one[1];
        twoHit = two[1];
        return two[1] - one[1]
    })
    return arr;
}

function getEach(pages)
{
    var sorted = sortPages(pages);
    for (var sorted of sorted)
    {
        var url = sorted[0];
        var hits = sorted[1];
        return(`Found ${hits} links linked to page ${url}\n`);
    }
}

function printLog(pages)
{
    console.clear();
    console.log("========================================================================")
    var sorted = sortPages(pages);
    for (var sorted of sorted)
    {
        var url = sorted[0];
        var hits = sorted[1];
        console.log(`Found ${hits} links linked to page ${url}`);
    }
    console.log("========================================================================")
    logger.debugLog("abuse", "Finished crawling");
}

function saveFile(pages)
{
    var path = process.cwd();
    var writeStream = fs.createWriteStream(`${path}/crawl.log`);
    writeStream.write(`========================================================================\n                       @buse crawler\n========================================================================)\n`);
    writeStream.write(`${getEach(pages)}\n`);
    writeStream.end();
}

module.exports =
{
    printLog,
    saveFile
}