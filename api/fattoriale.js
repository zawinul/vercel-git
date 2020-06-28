const fact = x => x<=1 ? 1 : x*fact(x-1);

module.exports = (req, res) => {
	try {
		var x = req.query.x;

		res.json({
			p:req.params,
			q:req.query,
			saluti:'ciao!', 
			a:28,
			result:fact(x-0);
		});
	}
	catch(e) {
		res.json({error:""+e});

	}
  }