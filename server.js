
//Install express server
const express = require('express');
const path = require('path');

const app = express();

var port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static('src/' + __dirname + '/'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('src/' + __dirname + '/pages/tabs/tabs.page.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});