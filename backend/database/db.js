const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("jobfinder", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
sequelize.sync({ alter: true })
  .then(() => {
    console.log('synchronized');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
});
module.exports = sequelize;
connection();