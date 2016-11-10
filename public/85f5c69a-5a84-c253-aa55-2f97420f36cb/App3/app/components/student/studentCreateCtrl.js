var App3; 
                         (function (App3) { 
                         var studentCreateCtrl = (function () {  
                         function studentCreateCtrl($scope, studentService, $resource,  $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         this.addNew = function () { 
                         studentService.getName($resource).save(this.newItem, function (result) { 
                         $location.path("/student"); 
                         }); 
                         }; 
                         } 
                         return studentCreateCtrl ; 
                         })(); 
                         App3.studentCreateCtrl  = studentCreateCtrl ; 
                         })(App3 || (App3 = {}));  