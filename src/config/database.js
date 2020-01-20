// docker run --name "postgis" -p 25432:5432 -e POSTGRES_USER=docker -e POSTGRES_PASS=docker -d -t kartoza/postgis

module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: "25432",
  username: "docker",
  password: "docker",
  database: "sqlnode2",
  define: {
    timestamps: true,
    underscored: true
  }
};
