import module from '../module'

module.directive('helloworld', () => {
  return {
    restrict: 'E',
    replace:false,
    scope: {
      title: '@',
      content: '@'
    },
    template : `<window title="{{ title }}">{{ content }} <a href="#" ng-click="test()">test</a></window>`,
    link: (scope) => {
      scope.test = () => {
        console.log('Test')
      }
    }
  }
});
