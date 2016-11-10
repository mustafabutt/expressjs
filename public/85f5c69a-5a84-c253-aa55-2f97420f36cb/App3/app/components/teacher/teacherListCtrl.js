var App3; 
                                 (function (App3) { 
                                 var teacherListCtrl = (function () {  
                                 function teacherListCtrl($scope, teacherService,  $resource, $stateParams, $location) { 
                                 this.$inject = ["$scope"]; 
                                 $scope.vm = this;
                                 teacherService.getName($resource).query({}, function (list) { 
                                 $scope.vm.list = list; 
                                 }); 
                                 } 
                                 return teacherListCtrl; 
                                 })(); 
                                 App3.teacherListCtrl = teacherListCtrl; 
                                 })(App3 || (App3 = {})); 
                                   