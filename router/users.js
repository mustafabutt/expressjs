var express      =require('express'); 
     var app         =express();    
     var crudRouter  =express.Router(); 
     var withORMCtrl=require('../controllers/users.js')();
     crudRouter.route('/')
         .get(withORMCtrl.get)
         .post(withORMCtrl.post);
     crudRouter.route('/:id')
         .get(withORMCtrl.getOne)
         .put(withORMCtrl.put)
         .delete(withORMCtrl.delete) 
     module.exports=crudRouter;