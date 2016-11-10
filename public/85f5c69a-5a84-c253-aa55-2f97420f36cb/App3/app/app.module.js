(function () { 
                                 /// <reference path="../../../assets/typings/restangular.d.ts" />  
                                 angular.module("App3", [   
                                   "ui.bootstrap", 
                                     "auth0",
                                     "angular-storage",
                                     "angular-jwt", 
                                      "restangular", 
                                 "ngResource", 
                                 "ui.router", 
                                 "ngNewRouter" 
                                 ]).config(function (authProvider, $httpProvider, $locationProvider, jwtInterceptorProvider) { 
                                 authProvider.init({ 
                                  domain: "example.auth0.com",  
                                 clientID: "sadasdasd", 
                                 loginUrl: "/login" 
                                 }); 
                                 jwtInterceptorProvider.tokenGetter = function (store) { 
                                   return store.get("token"); 
                                 } 
                                  $httpProvider.interceptors.push("jwtInterceptor"); 
                                 }) 
                                 .run(function ($rootScope, auth, store, jwtHelper, $location) { 
                                  });
                                 })(); 