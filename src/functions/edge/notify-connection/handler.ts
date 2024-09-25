import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";
import snsConfig from "./sns.config.json";

const snsClient = new SNSClient({ region: snsConfig.region });

export const main = async (event, _, callback) => {
    await snsClient.send(
        new PublishCommand({
            TopicArn: snsConfig.arn,
            Message: JSON.stringify({ data: process.env.AWS_REGION ?? "us-east-1" }),
        }),
    );

    const request = event.Records[0].cf.request;
    callback(null, request);
}