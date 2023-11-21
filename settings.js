const fs = require('fs');
const logger = require('./handler/prettylog.js');

function entry()
{
    console.clear();
    if (process.argv.length < 3)
    {
        logger.debugLog("methane", "Please enter a settings type. Usage: Silent, Errors, Crawls, Results");
        process.exit(1);
    }
    if (process.argv.length > 3)
    {
        logger.debugLog("methane", "Please only enter one type. Usage: Silent, Errors, Crawls, Results");
        process.exit(1);
    }
    var type = process.argv[2].toLowerCase();
    switch (type)
    {
        case "silent":
            saveSettingsFile(false, false, false);
        break;
        case "errors":
            saveSettingsFile(false, true, false);
        break;
        case "crawls":
            saveSettingsFile(true, false, false);
        break;
        case "crawls":
            saveSettingsFile(false, false, true);
        break;
        default:
            logger.debugLog("methane", "Please enter a correct settings type");
        return;
    }
    logger.debugLog("methane", `Created ${type} settings`);
}

function saveSettingsFile(logCrawls, logIssues, printResult)
{
    var path = process.cwd();
    fs.writeFileSync(`${path}/settings.json`, `{\n"logCrawls": ${logCrawls},\n"logIssues": ${logIssues},\n"printResult": ${printResult}\n}`);
}
entry();