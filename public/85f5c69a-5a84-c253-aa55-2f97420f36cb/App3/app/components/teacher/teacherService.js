/// <reference path="../../app.routes.ts" /> 
                                /// <reference path="../../../assets/typings/angular-resource.d.ts" />  
                                 var App3; 
                                  (function (App3) { 
                                 var teacherSvc = (function () { 
                                  function teacherSvc() {}
                                 teacherSvc.prototype.getName = function ($resource) { 
                                 var url = "http://localhost:3000/teacher/:Id"; 
                                 return $resource(url, null, {  
                                   "update": { 
                                 method: "PUT" } 
                                  }); 
                                 }; 
                                 return teacherSvc; 
                                })(); 
                                    App3.teacherSvc = teacherSvc; 
                                 })(App3 || (App3 = {})); 
                                 app.factory("teacherService", function () { 
                                 return new App3.teacherSvc(); 
                                 }); 