var App3; 
                         (function (App3) { 
                         var teacherCreateCtrl = (function () {  
                         function teacherCreateCtrl($scope, teacherService, $resource,  $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         this.addNew = function () { 
                         teacherService.getName($resource).save(this.newItem, function (result) { 
                         $location.path("/teacher"); 
                         }); 
                         }; 
                         } 
                         return teacherCreateCtrl ; 
                         })(); 
                         App3.teacherCreateCtrl  = teacherCreateCtrl ; 
                         })(App3 || (App3 = {}));  