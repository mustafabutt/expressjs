var App3; 
                         (function (App3) { 
                         var teacherDetailsCtrl = (function () {  
                         function teacherDetailsCtrl($scope, teacherService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                         $scope.vm.item = item; 
                         }); 
                         } 
                         return teacherDetailsCtrl; 
                         })(); 
                         App3.teacherDetailsCtrl = teacherDetailsCtrl; 
                         })(App3 || (App3 = {})); 