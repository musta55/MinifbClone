const mongoose = require("mongoose");

mongoose.connect("mongodb://db-status:27017/status-service", (err) => {
	if (!err) {
		console.log("MongoDB connection succeeded.");
	} else {
		console.log(
			"Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
		);
	}
});

require("./post");
