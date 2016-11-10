var App3; 
                                 (function (App3) { 
                                 var studentListCtrl = (function () {  
                                 function studentListCtrl($scope, studentService,  $resource, $stateParams, $location) { 
                                 this.$inject = ["$scope"]; 
                                 $scope.vm = this;
                                 studentService.getName($resource).query({}, function (list) { 
                                 $scope.vm.list = list; 
                                 }); 
                                 } 
                                 return studentListCtrl; 
                                 })(); 
                                 App3.studentListCtrl = studentListCtrl; 
                                 })(App3 || (App3 = {})); 
                                   