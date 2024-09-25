export const main = (event, context, callback) => {
    console.log({ event, context, env: process.env });
    const request = event.Records[0].cf.request;
    callback(null, request);
}