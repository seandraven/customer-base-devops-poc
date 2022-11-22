
const {
    PORT,
    SERVER_DOCS_EXPOSE,
    NODE_ENV,
    DB_MONGO_HOST,
    DB_MONGO_PORT,
    DB_MONGO_USER,
    DB_MONGO_PASSWORD,
    DB_MONGO_DATABASE,
    DB_MONGO_PROTOCOL,
    PAGE_SIZE_DEFAULT,
  } = process.env;

export const appConfig = {
  name: "CUSTOMER_BASE",
  docDB: {
    name: DB_MONGO_DATABASE || "database",
    host: DB_MONGO_HOST || "localhost",
    port: DB_MONGO_PORT ? Number(DB_MONGO_PORT) : 0,
    user: DB_MONGO_USER || "",
    password: DB_MONGO_PASSWORD || "",
    protocol: DB_MONGO_PROTOCOL || "mongodb",
    pageSize: Number(PAGE_SIZE_DEFAULT) || 10,
  },
  server: {
    port: PORT ? Number(PORT) : 4000,
    docs: {
      expose: SERVER_DOCS_EXPOSE || NODE_ENV === "development",
    },
  },
};
