module.exports = { 
         identity:'teacher', 
         connection: 'mysqlDB',   
         schema:true,              
         migrate: 'alter',          
         attributes: {"username":"string","email":"string","password":"string"}   
         };