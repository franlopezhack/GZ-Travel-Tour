

const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/GZ-Tour";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() =>
    console.info(`Successfully connected to the database ${MONGODB_URI}`)
  )
  .catch((error) =>
    console.error(
      `An error ocurred trying to connect to de database ${MONGODB_URI}`,
      error
    )
  );

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});