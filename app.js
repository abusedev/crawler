const logger = require('./handler/prettylog.js');
const crawler = require('./handler/crawler.js');
const save = require('./handler/save.js');
const settings = require('./settings.json');

async function entry()
{
    console.clear();
    if (process.argv.length < 3)
    {
        logger.debugLog("methane", "Please enter a url to crawl. Usage: npm start https://google.com");
        process.exit(1);
    }
    if (process.argv.length > 3)
    {
        logger.debugLog("methane", "Please only enter one url. Usage: npm start https://google.com");
        process.exit(1);
    }
    else
    {
        var url = process.argv[2];
        if (url.includes("https://") || url.includes("http://"))
        {
            var pages = await crawler.crawl(url, url, {}); // remember, this is an object!
            if (settings.printResult)
            {
                save.printLog(pages);
            }
            save.saveFile(pages);
            //for (var page of Object.entries(pages)) // if you just do "pages", it will not work.
            //{
             //console.log(page);   
            //} 
        }
        else
        {
            logger.debugLog("methane", `Please make sure to use https:// or http://`);
            return;
        }
    }
}

entry();