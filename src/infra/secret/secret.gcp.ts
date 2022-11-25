import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const client = new SecretManagerServiceClient();

export default class GCPSecret {
  async getSecret(name: string): Promise<any> {
    const projectId = process.env.GOOGLE_CLOUD_PROJECT;
    const secretName = `projects/${projectId}/secrets/${name}/versions/latest`;
    const [secretVersion] = await client.accessSecretVersion({
      name: secretName,
    });
    const secret = secretVersion.payload.data.toString();
    return secret;
  }
}
