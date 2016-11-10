var supertest = require('supertest'); 
                     var should = require('should'); 
                     var ctrl = require('../controllers/users.js')(); 
                     var withoutORMCtrl=require('../controllers/users.js')(); 
                     var server = supertest.agent('http://localhost:3000/router/users'); 
                     describe('unit test users routes', function () { 
                         it('should return single record', function (done){ 
                             server 
                             .get('/:id') 
                             .expect('Content-type',/json/) 
                             .expect(ctrl.get) 
                             .end(function (res,err) { 
                                 res.status.should.equal(200); 
                                 res.body.err.should.equal(false); 
                                 }) 
                                 done(); 
                           }); 
                         it('should post record', function (done){  
                             server 
                             .post('/') 
                             .expect('Content-type',/json/) 
                             .expect(ctrl.post) 
                             .end(function (res,err) { 
                                 res.status.should.equal(201); 
                                 res.body.err.should.equal(false);  
                                 });  
                              done(); 
                           });  
                         it('should return update route', function (done) { 
                             server.put('/:id')  
                             .expect(ctrl.put)  
                             .end(function (res,err) {  
                                 res.status.should.equal(202);  
                                 res.body.err.should.equal(false);  
                             });  
                             done();  
                           })  
                           it('should return delete route', function (done) { 
                             server.put('/:id') 
                             .expect(ctrl.delete) 
                             .end(function (res,err) { 
                                 res.status.should.equal(202); 
                                 res.body.err.should.equal(false); 
                                 }); 
                              done(); 
                              }) 
                         }); 
                         var server = supertest.agent('http://localhost:3000/controllers/users');  
                         describe('unit test users controller', function () {  
                             it('should return one users', function (done) {  
                             server  
                             .get(':/id')  
                             .expect(withoutORMCtrl.getOne) 
                             .end(function (res, err) {  
                                 if(err){  
                                     res.status(500).send(err); 
                                 }else {  
                                     db('users').findOne({id: req.params.id});  
                                     }  
                                 });  
                             done();  
                             });  
                            it('should return all users', function (done){ 
                                 server 
                                 .get('/') 
                                 .expect(withoutORMCtrl.get) 
                                 .end(function (res,err) { 
                                     if(err){ 
                                         res.status(500).send(err); 
                                     }else{ 
                                         db('users').find(function(err,data){ 
                                     if(err){ 
                                         res.status(500).send(err); 
                                     }else{ 
                                         res.json(data); 
                                     } 
                                     }); 
                                 } 
                             }); 
                             done(); 
                         }); 
                         it('should create new users', function (done) {  
                             server  
                             .post('/')  
                             .expect(withoutORMCtrl.post)  
                             .end(function(res,err){ 
                             if(err){  
                                 res.status(500).send(err);  
                             }else{ 
                                 db('users').create(req.body).exec(function(err){  
                             if(err){ 
                                 res.status(500).send(err); 
                             }else{ 
                                 res.status(201).send('user has been created'); 
                                 } 
                                 }); 
                                 } 
                             }); 
                                 done(); 
                         }); 
                         it('should update a users record', function (done) { 
                             server  
                             .put('/:id') 
                             .expect(withoutORMCtrl.put) 
                             .end(function(res,err){ 
                             if(err){res.status(500).send(err)} 
                             else{ 
                                 db('users').update({id:req.params.id},req.body).exec(function(err){ 
                             if(err){  
                                 res.status(500).send(err);  
                             }else{  
                                 db('users').findOne({id:req.params.id}).exec(function(err,data){  
                             if(err){  
                                 res.status(500).send(err);  
                             }else{  
                                 res.json(data)  
                             }  
                             });  
                             }  
                             });  
                             }  
                             });  
                                 done();   
                         });  
                         it('should delete a users record',function(done){ 
                             server  
                             .delete('/:id')  
                             .expect(withoutORMCtrl.delete)  
                             .end(function(res,err){  
                             if(err){res.status(500).send(err)}  
                             else{  
                             db('users').destroy({id:req.params.id}).exec(function(err){ 
                             if(err){  
                             res.status(500).send(err);  
                             }else{  
                             res.send('User with id: '+req.params.id+' has been deleted');  
                             }  
                             });  
                             }  
                             });  
                                 done();  
                         });  
                     }); 
         