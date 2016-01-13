import module from '../module'

module.directive('icon', () => {
  return {
    restrict: 'E',
    scope: false,
    template : `<div class="icon"><img class="icon-image" src="{{ icon }}"><div class="icon-caption">{{ caption }}</div></div>`,
    link: (scope, element, attributes) => {
      scope.icon = attributes.src;
      scope.caption = attributes.caption;
      scope.addWindow('test', 'test', 'helloworld')

      element.on('dblclick', () => {
        scope.addWindow('test', 'test', 'helloworld')
        scope.$apply();
      });

    }
  }
});
