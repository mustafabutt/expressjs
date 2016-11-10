var App3; 
                         (function (App3) { 
                         var teacherDeleteCtrl = (function () {  
                         function teacherDeleteCtrl($scope, teacherService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                          $scope.vm.deleteItem = item; 
                         }); 
                         this.delete = function () { 
                         teacherService.getName($resource).delete({ Id: $stateParams.id }, function (result) { 
                          $location.path("/teacher"); 
                         }); 
                         }; 
                         } 
                         return teacherDeleteCtrl; 
                         })(); 
                         App3.teacherDeleteCtrl = teacherDeleteCtrl; 
                         })(App3 || (App3 = {})); 
  