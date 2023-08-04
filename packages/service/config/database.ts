export default ({ env }) => {
  const obj = {
    defaultConnection: "default",
    connection: {
      client: env("DATABASE_CLIENT", "sqlite"),
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "optika"),
        user: env("DATABASE_NAME_USER", "root"),
        password: env("DATABASE_NAME_PASSWORD", "Pa$$w0rd"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL", false), // For self-signed certificates
        },
      },
    },
    debug: false,
  };
  console.log("ENV", obj);
  return obj;
};
