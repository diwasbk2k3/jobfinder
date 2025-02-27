const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("jobfinder", "postgres", "Bk2k5@#$", {
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

// Sync Models
sequelize.sync({ alter: true }) // Automatically alter the tables to match the model definitions, without dropping them
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
});

module.exports = sequelize;
// Call the connection function
connection();