const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.static("public")); // per gli asset statici
app.use(express.json()); //per parametri json
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
