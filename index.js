var express=require('express');
var path  = require('path');
var multer  = require('multer');
var upload = multer({ dest:'./upload/' })

var app=express();
app.set('port', (process.env.PORT || 5000));




app.get('/',function(request, response){
	var fileName = path.join(__dirname, 'index.html');
	response.sendFile(fileName, function (err) {
		if (err) {
			console.log(err);
			response.status(err.status).end();
		}
		else {
			console.log('Sent:', fileName);
		}
	});
});

app.post('/upload', upload.any(), function(req, res, next) {
  
  
  res.json({"size":req.files[0].size});
});

app.listen(app.get('port'),function(){
	console.log('Node app is running on port', app.get('port'));
});