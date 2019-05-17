GjApp.controller("headerController",['$scope', '$location',function($scope,$location){

    $scope.popUp = false;


    $scope.showCall = ()=> $scope.popUp == false ? $scope.popUp = true : "";


    $scope.closePopUp = () => $scope.popUp == true ? $scope.popUp = false : "";


    $scope.closeModal = () => $scope.popUp = false;


    $scope.sendMessage = () => $location.path('/contact-success');

}]);