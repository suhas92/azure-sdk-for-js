// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// NOTE: replace with import { TextAnalyticsClient } from "@azure/cognitiveservices-textanalytics"
// in a standalone project
import {
  TextAnalyticsClient,
  CognitiveServicesCredential,
  DetectLanguageResult,
  DetectLanguageErrorResult,
  DetectLanguageSuccessResult
} from "../src";

export async function run() {
  console.log(`Running detectLanguages sample`);

  // You will need to set these environment variables
  const endPoint = process.env["AZ_CONFIG_ENDPOINT"]!;
  const subscriptionKey = process.env["AZ_CONFIG_SUBSCRIPTION_KEY"]!;
  const client = new TextAnalyticsClient(
    endPoint,
    new CognitiveServicesCredential(subscriptionKey)
  );

  const [result] = await client.detectLanguages(["hello world"]);

  if (isSuccess(result)) {
    console.log(`Primary language detected as ${result.primaryLanguage.name}`);
  }
}

function isSuccess(result: DetectLanguageResult): result is DetectLanguageSuccessResult {
  return !(result as DetectLanguageErrorResult).error;
}

// If you want to run this sample from a console
// uncomment these lines so run() will get called
// run().catch((err) => {
//   console.log(`ERROR: ${err}`);
// });
