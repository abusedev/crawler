const {JSDOM} = require('jsdom');
const settings = require('../settings.json');

function normalize(url)
{
    var urlObj = new URL(url);
    var host = `${urlObj.hostname}${urlObj.pathname}`;
    if (host.length > 0 && host.slice(-1) === '/') // host.slice to get last part of character to check for "/" in the url
    {
        return host.slice(0, -1); //return everything but the "/" (last character)
    }
    else
    {
        return host;
    }
}

// get all embedded links on page //
function getFromHtml(body, base)
{
    const urls = [];
    const dom = new JSDOM(body);
    var elements = dom.window.document.querySelectorAll('a'); // get all "a" tags
    for (var elements of elements)
    {
        if (elements.href.slice(0, 1) === "/")
        {
            // relative url
            try
            {
                var url = new URL(`${base}${elements.href}`);
                urls.push(url.href);
            }
            catch (ex)
            {
                if (settings.logIssues)
                {
                    console.log(`[crawler-html-parser]: ${ex.message}`);
                }
            }
        }
        else
        {
            // absolute url
            try
            {
                var url = new URL(elements.href);
                urls.push(url.href);
            }
            catch (ex)
            {
                if (settings.logIssues)
                {
                    console.log(`[crawler-html-parser]: ${ex.message}`);
                }
            }
        }
    }
    return urls;
}

module.exports =
{
    normalize,
    getFromHtml
}