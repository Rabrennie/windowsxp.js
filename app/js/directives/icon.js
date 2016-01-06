import module from '../module'

module.directive('icon', ($document, $compile) => {
  return {
    restrict: 'E',
    template : `<div class="icon"><img src="{{ icon }}"></div>`,
    link: (scope, element, attributes) => {
      scope.icon = attributes.src;

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        var el = $compile('<helloworld></helloworld>')(scope);
        element.parent().append(el);
        event.preventDefault();
      });

    }
  }
});
