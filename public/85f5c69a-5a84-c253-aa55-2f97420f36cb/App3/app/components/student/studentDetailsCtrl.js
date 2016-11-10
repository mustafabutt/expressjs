var App3; 
                         (function (App3) { 
                         var studentDetailsCtrl = (function () {  
                         function studentDetailsCtrl($scope, studentService, $resource, $stateParams, $location) { 
                         this.$inject = ["$scope"]; 
                         $scope.vm = this;
                         studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                         $scope.vm.item = item; 
                         }); 
                         } 
                         return studentDetailsCtrl; 
                         })(); 
                         App3.studentDetailsCtrl = studentDetailsCtrl; 
                         })(App3 || (App3 = {})); 