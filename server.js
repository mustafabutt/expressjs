var express=require('express'); 
                 app = express(); 
                 var path = require('path');  
                 var bodyParser  =require('body-parser'); 
                 app.use(express.static('public')); 
                 app.use(bodyParser.json()); 
                 app.use(bodyParser.urlencoded({ extended: true })); 
                 require('./router.js'); 
                 var waterlineConfig = require('./waterline/config') 
                 , waterlineOrm = require('./waterline/init').waterlineOrm; 
                 var modelPath = path.join(__dirname, '/models');
                 require('./waterline/init')(modelPath); 
                 waterlineOrm.initialize(waterlineConfig, function (err, models) { 
                 if (err) throw err; 
                  db = function (table) { return models['collections'][table]; }; 
                  db.collections = models.collections; 
                 db.connections = models.connections; 
                 }); 
                 app.listen('3000', function (){ 
                 console.log('server is listening at porttt 3000');   
                 }); 
  