/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { AzureMLCommitmentPlansManagementClientContext } from "../azureMLCommitmentPlansManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: AzureMLCommitmentPlansManagementClientContext;

  /**
   * Create a Operations.
   * @param {AzureMLCommitmentPlansManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureMLCommitmentPlansManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available Azure Machine Learning Studio Commitment Plan RP REST API operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OperationEntityListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationEntityListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationEntityListResult>, callback?: msRest.ServiceCallback<Models.OperationEntityListResult>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.MachineLearning/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationEntityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};