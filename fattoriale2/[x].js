function fattoriale(x) {
	if (x <= 1)
		return 1;
	else return x * fattoriale(x - 1);
}

module.exports = (req, res) => {
	try {

		res.json({
			result: fattoriale(req.params.x - 0)
		});

	}
	catch (e) {

		res.json({
			q: req.query,
			p: req.params,
			error: "" + e
		});

	}
}