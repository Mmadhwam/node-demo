const express = require ('express');
const app = express()
var port = process.env.PORT || 4000;
app.get('/', (req,res) => res.send('Welcome to Devops !!'));
app.listen (port, () => console.log('server is running on ' + port));
