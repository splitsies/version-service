import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";
import snsConfig from "./sns.config.json";

const snsClient = new SNSClient({ region: snsConfig.region });

export const main = async (event, context, callback) => {
    console.log({ event, context, env: process.env });
    await snsClient.send(
        new PublishCommand({
            TopicArn: snsConfig.arn,
            Message: JSON.stringify(process.env),
        }),
    );

    const request = event.Records[0].cf.request;
    callback(null, request);
}