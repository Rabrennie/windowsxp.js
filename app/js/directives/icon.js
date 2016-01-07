import module from '../module'

module.directive('icon', () => {
  return {
    restrict: 'E',
    scope: false,
    template : `<div class="icon"><img src="{{ icon }}"></div>`,
    link: (scope, element, attributes) => {
      scope.icon = attributes.src;
      scope.addWindow('test', 'test', 'helloworld')

      element.on('dblclick', () => {
        scope.addWindow('test', 'test', 'helloworld')
        scope.$apply();
      });

    }
  }
});
