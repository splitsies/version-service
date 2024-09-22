import "reflect-metadata";
import { Logger, MessageQueueClient, SplitsiesFunctionHandlerFactory } from '@splitsies/utils';
import { DataResponse, HttpStatusCode, QueueMessage } from "@splitsies/shared-models";
import { randomUUID } from "crypto";

// const messageQueueClient = new MessageQueueClient(new Logger())

export const main = SplitsiesFunctionHandlerFactory.create<never, string>(new Logger(), async (event) => {    
    // await messageQueueClient.publish(new QueueMessage(process.env.UserConnectedTopicArn, randomUUID(), process.env.RtRegion));
    console.log("The edge function has successfully been run");
    return new DataResponse(HttpStatusCode.OK, "successfully published connection notification").toJson();
});