const cors = require("../cors-util");
const config = require("../cors-config.json");

/**
 * Demonstrates a simple endpoint that accepts GET requests.
 *
 * In most cases, browsers do not perform CORS preflight requests when using
 * the GET method, so we do not have to handle OPTIONS requests.
 * Any desired additional CORS headers should be included in the GET response.
 */
exports.handler = async (event, context) => {
    const origin = cors.getOriginFromEvent(event);

    console.log("\nInput text: " + event.queryStringParameters.text);

    // return an empty response, with CORS origin
    return {
        headers: {"Access-Control-Allow-Origin": "*"},
        statusCode: 200,
        body: JSON.stringify({ text: event.queryStringParameters.text })
    };
};
