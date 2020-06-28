module.exports = (req, res) => {
	try {
		res.json({result:req.parameters,saluti:'ciao!'});
	}
	catch(e) {
		res.json({error:""+e});

	}
  }