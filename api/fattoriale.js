module.exports = (req, res) => {
	try {
		res.json({result:req.params,saluti:'ciao!'});
	}
	catch(e) {
		res.json({error:""+e});

	}
  }