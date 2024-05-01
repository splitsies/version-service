import "reflect-metadata";
import { Logger, SplitsiesFunctionHandlerFactory } from '@splitsies/utils';
import { DataResponse, HttpStatusCode } from "@splitsies/shared-models";
import config from "../../config/version.config.json";

export const main = SplitsiesFunctionHandlerFactory.create<never, string>(new Logger(), async (event) => {
    return new DataResponse(HttpStatusCode.OK, config.latestStableVersion);
});