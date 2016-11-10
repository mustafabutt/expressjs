var App3; 
                         (function (App3) { 
                         var studentEditCtrl = (function () {  
                         function studentEditCtrl($scope, studentService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                          $scope.vm.editItem = item; 
                         }); 
                         this.save = function () { 
                         var item = $scope.vm.editItem; 
                         studentService.getName($resource).update({ Id: $stateParams.id }, item, function (result) { 
                         $location.path("/student"); 
                         }); 
                         } 
                         } 
                         return studentEditCtrl; 
                         })(); 
                         App3.studentEditCtrl = studentEditCtrl; 
                         })(App3 || (App3 = {})); 
  