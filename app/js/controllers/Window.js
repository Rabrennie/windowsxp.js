import module from '../module'

module.controller('WindowCtrl', ($scope) => {
  $scope.windows = []
  $scope.addWindow = (title, content) => $scope.windows.push({ content, title })
});
