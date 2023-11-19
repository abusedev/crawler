function debugLog(process, message)
{
    console.log(`[${process}] LOG: ${message}`);
}

async function delayedDebugLog(process, message)
{
    console.log(await `[${process}] LOG: ${message}`);
}


module.exports =
{
    debugLog,
    delayedDebugLog
}