var mysqlAdapter = require('sails-mysql');
                         module.exports = { 
                         adapters: {  
                         mysqlAdapt: mysqlAdapter 
                         }, 
                         connections: { 
                         mysqlDB: { 
                         adapter: 'mysqlAdapt', 
                         host: 'localhost',
                         database: 'test', 
                         user:'root', 
                         password:'', 
                         supportBigNumbers:true, 
                         debug:['ComQueryPacket'], 
                         trace:true 
                         } 
                         } 
                         };   
  