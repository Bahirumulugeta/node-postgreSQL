const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "pg@password",
  host: "localhost",
  port: 5432,
  database: "kemer",
});
client
  .connect()
  .then(() => console.log("connected successfully"))
  .then(()=>client.query('select * from users'))
  .then(results=>console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end);
