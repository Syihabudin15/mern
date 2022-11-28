const express = require('express');
const router = require('./src/router')

const app = express();

app.use(router);

app.listen(4000, () => {
	console.log('Access : http://localhost:4000');
});