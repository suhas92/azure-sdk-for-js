// Copyright (c) Microsoft corporation.
// Licensed under the MIT license.

import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

export async function main(): Promise<void> {
  // DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  const credential = new DefaultAzureCredential();

  const vaultName = process.env["KEYVAULT_NAME"] || "<keyvault-name>";
  const url = `https://${vaultName}.vault.azure.net`;
  const client = new SecretClient(url, credential);

  const bankAccountSecretName = "secretListOperations1";
  const storageAccountSecretName = "secretListOperations2";

  // Create our secrets
  await client.setSecret(bankAccountSecretName, "ABC123");
  await client.setSecret(storageAccountSecretName, "XYZ789");

  // List the secrets we have, by page
  console.log("Listing secrets by page");
  for await (const page of client.listPropertiesOfSecrets().byPage({ maxPageSize: 2 })) {
    for (const secretProperties of page) {
      const secret = await client.getSecret(secretProperties.name);
      console.log("secret: ", secret);
    }
    console.log("--page--");
  }

  // List the secrets we have, all at once
  console.log("Listing secrets all at once");
  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    const secret = await client.getSecret(secretProperties.name);
    console.log("secret: ", secret);
  }

  await client.setSecret(bankAccountSecretName, "ABC567");

  // List the versions of BankAccountPassword
  for await (const secretProperties of client.listPropertiesOfSecretVersions(
    bankAccountSecretName
  )) {
    if (secretProperties.enabled) {
      const secret = await client.getSecret(secretProperties.name);
      console.log("secret version: ", secret);
    }
  }

  await client.beginDeleteSecret(bankAccountSecretName);
  await client.beginDeleteSecret(storageAccountSecretName);
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});
