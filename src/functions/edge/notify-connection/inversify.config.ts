import { ILogger, IMessageQueueClient, Logger, MessageQueueClient } from "@splitsies/utils";
import { Container } from "inversify";
import "reflect-metadata";

const container = new Container({ defaultScope: "Singleton" });

container.bind<ILogger>(ILogger).to(Logger);
container.bind<IMessageQueueClient>(IMessageQueueClient).to(MessageQueueClient);

export { container };
