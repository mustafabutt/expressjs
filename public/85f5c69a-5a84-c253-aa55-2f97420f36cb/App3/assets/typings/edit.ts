/// <reference path='Svc.ts' />

module Products {

  export class update {
    constructor($scope,Restangular,UserSvc,$stateParams) {
       var selected=UserSvc.getName(Restangular).getProfile().getList().then(function(data){
            $scope.selectedPerson=data[$stateParams.id-4];
            selected=data[$stateParams.id-4];
        });
         $scope.update=function (){
         selected.put();
        }
    }
}
}