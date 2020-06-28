const fact = x => x<=1 ? 1 : x*fact(x-1);

module.exports = (req, res) => {
	try {
		var x = req.query.x;

		res.json({
			result:fact(x-0)
		});
	}
	catch(e) {
		res.json({
			q: req.query,
			p: req.params,
			error: ""+e
		});

	}
  }