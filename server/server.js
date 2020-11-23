const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;

const mongoose = require("mongoose");
const passport=require("passport")

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })

    .then(() => console.log('Connection to Mongo DB established'))

    .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());

app.use(

  bodyParser.urlencoded({

    extended: true

  })

);

app.use(cors());
app.use(passport.initialize());
require("./passportStrategy");
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/activities',require('./routes/activities'));
app.use("/comment",require("./routes/comment"))
app.use("/user",require("./routes/user"))
app.use("/auth",require("./routes/auth"))

//passport middleware



const port = process.env.PORT || 5000;

app.listen(port, () => {

  console.log("Server is running on " + port + "port");

});
