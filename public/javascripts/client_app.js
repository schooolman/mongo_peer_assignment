var app = angular.module('assignmentApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){


console.log("connected");

    $scope.assignmentData = [];

    $http({
        method: 'GET',
        url: '/assignments/assignment'
    }).then(function callBack(response){
        //$scope.assignmentData = response.data;
        //console.log($scope.assignmentData);
        //$scope.tempAssignment =$scope.assignmentData[0];
        var data = response.data;
        for(var i = 0; i < data.length; i++){
            $scope.tempObj = data[i];
            $scope.assignmentData.push($scope.tempObj);
        }
    });

//console.log($scope.assignmentData);

    //$scope.displayData = $scope.assignmentData.data[0];

}]);
