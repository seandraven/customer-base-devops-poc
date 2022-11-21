import { connect } from "mongoose";
import { appConfig } from "../config/app.config";
import { LogData, logger } from "../logging/logging";
import GCPSecret from "../secret/secret.gcp";

async function run() {

  const secretImp = new GCPSecret();
  const { name, host, port, user, password, protocol } = appConfig.docDB;
  const mongoUser = user ? await secretImp.getSecret(user) : user;
  const mongoPassword = password ? await secretImp.getSecret(password) : password;
  const userInfoConnection = user ? `${mongoUser}:${mongoPassword}@` : '';
  const portConnection = port !== 0 ? `:${port}` : '';

  logger.debug(new LogData("MongoConnections"), `url: ${protocol}://${userInfoConnection}${host}${portConnection}`);
  await connect(`${protocol}://${userInfoConnection}${host}${portConnection}`, {
    dbName: name,
  });
}
run().catch((err) => console.log(err));
