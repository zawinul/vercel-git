module.exports = (req, res) => {
	res.json({
	  saluti:'ciao!',
	  body: req.body,
	  query: req.query,
	  cookies: req.cookies
	})
  }