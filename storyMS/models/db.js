const mongoose = require("mongoose");

mongoose.connect("mongodb://db-story:27017/story-service", (err) => {
	if (!err) {
		console.log("MongoDB connection succeeded.");
	} else {
		console.log(
			"Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
		);
	}
});

// require('./post');
