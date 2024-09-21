import "reflect-metadata";
import { IMessageQueueClient, Logger, SplitsiesFunctionHandlerFactory } from '@splitsies/utils';
import { DataResponse, HttpStatusCode, QueueMessage } from "@splitsies/shared-models";
import config from "../../config/version.config.json";
import { container } from "../../di/inversify.config";
import { randomUUID } from "crypto";

const messageQueueClient = container.get<IMessageQueueClient>(IMessageQueueClient);

export const main = SplitsiesFunctionHandlerFactory.create<never, string>(new Logger(), async (event) => {
    await messageQueueClient.publish(new QueueMessage(process.env.UserConnectedTopicArn, randomUUID(), process.env.RtRegion));
    return new DataResponse(HttpStatusCode.OK, config.minSupportedVersion);
});