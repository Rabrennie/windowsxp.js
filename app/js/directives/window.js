import module from '../module'

module.directive('window', () => {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    template : `<div class="window">
                	<titlebar>{{title}}</titlebar>
                	<div class="content"><ng-transclude></ng-transclude></div>
              </div>`,

    controller: ['$element', function($element) {
      this.moveTo = (x, y) => {
        $element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }
      this.close = () => {
        $element.remove();
      }

    }],
    link: (scope, element, attributes) => {
      scope.title = attributes.title;
    }
  }
});
