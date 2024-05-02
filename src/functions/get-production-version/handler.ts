import "reflect-metadata";
import { Logger, SplitsiesFunctionHandlerFactory } from '@splitsies/utils';
import { DataResponse, HttpStatusCode } from "@splitsies/shared-models";

export const main = SplitsiesFunctionHandlerFactory.create<never, string>(new Logger(), async (event) => {
    return new DataResponse(HttpStatusCode.OK, process.env.LatestStableVersion);
});