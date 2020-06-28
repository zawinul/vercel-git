module.exports = (req, res) => {
	res.json({
		result:req.parameters,
		saluti:'ciao!'

	})
  }