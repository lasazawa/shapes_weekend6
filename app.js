var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000, function(){
  console.log("get this party started on port 3000");
});
