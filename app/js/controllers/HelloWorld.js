import module from '../module'

module.controller('HelloWorld', ($scope) => {
  $scope.title = Math.random();
  $scope.content = 'Hello World';

  $scope.test = () => {
    $scope.content = 'rekt';
    $scope.apply()
  }
  window.setInterval(() => {$scope.title=Math.random(); $scope.apply()}, 33)

});
