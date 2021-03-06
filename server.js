const express = require('express'),
	cors = require('cors'),
	app = express(),
	port = process.env.PORT || 3001;
	bodyParser = require('body-parser'),
	todoRoutes = require('./routes/todo'),
	path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/api/todo', todoRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function(){
	console.log("Express server is running on port " + port)
})

