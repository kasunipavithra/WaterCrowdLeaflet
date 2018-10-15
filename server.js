//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/project4'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/project4/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8000;



server.listen(port, () => {
    console.log("App is running on port " + port);
});