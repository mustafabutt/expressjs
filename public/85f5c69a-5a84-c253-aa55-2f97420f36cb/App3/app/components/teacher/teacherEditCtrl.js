var App3; 
                         (function (App3) { 
                         var teacherEditCtrl = (function () {  
                         function teacherEditCtrl($scope, teacherService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                          $scope.vm.editItem = item; 
                         }); 
                         this.save = function () { 
                         var item = $scope.vm.editItem; 
                         teacherService.getName($resource).update({ Id: $stateParams.id }, item, function (result) { 
                         $location.path("/teacher"); 
                         }); 
                         } 
                         } 
                         return teacherEditCtrl; 
                         })(); 
                         App3.teacherEditCtrl = teacherEditCtrl; 
                         })(App3 || (App3 = {})); 
  