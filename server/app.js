const express = require("express");
const mongoose = require("mongoose");
const APIrouter = require("./Routes/Api-Router");
const PORT = process.env.PORT || 3001;
const URI = `mongodb+srv://zomatoclone123:zomato007@edureka-zomato.zqbyqnu.mongodb.net/edureka-zomato?retryWrites=true&w=majority`
const cors = require('cors')

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", APIrouter);

mongoose
  .connect(URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log("zomato is running on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
