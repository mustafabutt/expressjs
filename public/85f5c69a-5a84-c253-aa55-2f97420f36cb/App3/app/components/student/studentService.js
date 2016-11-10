/// <reference path="../../app.routes.ts" /> 
                                /// <reference path="../../../assets/typings/angular-resource.d.ts" />  
                                 var App3; 
                                  (function (App3) { 
                                 var studentSvc = (function () { 
                                  function studentSvc() {}
                                 studentSvc.prototype.getName = function ($resource) { 
                                 var url = "http://localhost:3000/student/:Id"; 
                                 return $resource(url, null, {  
                                   "update": { 
                                 method: "PUT" } 
                                  }); 
                                 }; 
                                 return studentSvc; 
                                })(); 
                                    App3.studentSvc = studentSvc; 
                                 })(App3 || (App3 = {})); 
                                 app.factory("studentService", function () { 
                                 return new App3.studentSvc(); 
                                 }); 