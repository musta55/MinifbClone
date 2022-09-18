require("./config/config");
require("./models/db");
require("./config/passportConfig");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
var path = require("path");
const rtsIndex = require("./routes/index.router");
const mongoose = require("mongoose");
// const dbconnect = require("./models/db.js");

var app = express();

// middleware
app.use(bodyParser.json());
app.use(
	cors({
		origin: "*",
	})
);
app.use(passport.initialize());
app.use("/api", rtsIndex);

// dbconnect();
mongoose.connect("mongodb://db-account:27017/account-service", (err) => {
	if (!err) {
		console.log("MongoDB connection succeeded.");
	} else {
		console.log(
			"Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
		);
	}
});

//Static files_section
app.use(express.static(path.join(__dirname, "public")));

// error handler
app.use((err, req, res, next) => {
	if (err.name === "ValidationError") {
		var valErrors = [];
		Object.keys(err.errors).forEach((key) =>
			valErrors.push(err.errors[key].message)
		);
		res.status(422).send(valErrors);
	} else {
		console.log(err);
	}
});

// start server
app.listen(3000, () => console.log(`Server started at port : 3000`));
