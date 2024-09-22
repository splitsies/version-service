export const main = (event, context, callback) => {
    console.log({ event, context });
    const request = event.Records[0].cf.request;
    callback(null, request);
}