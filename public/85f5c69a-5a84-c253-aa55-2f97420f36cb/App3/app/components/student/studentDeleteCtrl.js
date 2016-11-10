var App3; 
                         (function (App3) { 
                         var studentDeleteCtrl = (function () {  
                         function studentDeleteCtrl($scope, studentService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                          $scope.vm.deleteItem = item; 
                         }); 
                         this.delete = function () { 
                         studentService.getName($resource).delete({ Id: $stateParams.id }, function (result) { 
                          $location.path("/student"); 
                         }); 
                         }; 
                         } 
                         return studentDeleteCtrl; 
                         })(); 
                         App3.studentDeleteCtrl = studentDeleteCtrl; 
                         })(App3 || (App3 = {})); 
  