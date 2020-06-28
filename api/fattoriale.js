module.exports = (req, res) => {
	try {
		res.json({
			p:req.params,
			q:req.query,
			saluti:'ciao!', 
			a:28,
			result:42
		});
	}
	catch(e) {
		res.json({error:""+e});

	}
  }