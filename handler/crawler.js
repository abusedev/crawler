const logger = require('./prettylog.js');
const urls = require('./url.js');
const settings = require('../settings.json');

async function crawl(start, current, pages)
{
    var startObj = new URL(start);
    var currentObj = new URL(current);
    if (startObj.hostname !== currentObj.hostname)
    {
      return pages; // make sure its still the same domain
    }
    var normalized = urls.normalize(current);
    if (pages[normalized] > 0)
    {
      pages[normalized]++;
      return pages;
    }

    pages[normalized] = 1;
    if (settings.logCrawls)
    {
      logger.debugLog("crawler", `Crawling ${current}`);
    }
    try
    {
      // the default headers are fine, but it sends a cool name to the server instead of "chrome"
      let headers = new Headers
      ({
        "User-Agent"   : "@buse crawler"
      });
      const response = await fetch(current, 
      {
        headers: headers
      })
      if (response.status > 399) //400 client error 500 server
      {
        if (settings.logIssues)
        {
          logger.debugLog("crawler", `An unacceptable status code was returned. Code: ${response.status}`);
        }
        return pages;
      }
      var text = response.headers.get("content-type");
      if (text.includes("text/html"))
      {
        var body = await response.text();
        var next = urls.getFromHtml(body, start);
        for (var next of next)
        {
          pages = await crawl(start, next, pages);
        }
      }
      else
      {
        if (settings.logIssues)
        {
          logger.debugLog("crawler", `The website did not return any useable text in its response. Looked for: content-type text/html. Recieved: content-type ${text}`);
        }
        return pages;
      }
    }
    catch (ex)
    {
      if (settings.logIssues)
      {
        logger.debugLog("abuse", `An error occured doing a web crawl: ${ex.message}`);
      }
    }
    return pages;
}

module.exports =
{
  crawl
}