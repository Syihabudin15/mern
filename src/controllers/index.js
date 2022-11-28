// const Home = require('../views/home/Home.html')

exports.HomeRouter = (req, res, next) => {
	res.send('Ini Halaman Home')
	next();
}

exports.LoginRouter = (req, res, next) => {
	res.send('Halaman Login')
	next();
}