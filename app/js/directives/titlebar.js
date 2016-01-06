import module from '../module'

module.directive('titlebar', ($document) => {
  return {
    restrict: 'E',
    require: '^window',
    replace: true,
    transclude: true,
    template : `<div class="title-bar">
                		<div class="title-bar-title"><ng-transclude></ng-transclude></div>
                		<div class="title-bar-close"></div>
                		<div class="title-bar-max"></div>
                		<div class="title-bar-min"></div>
                	</div>`,


    link: (scope, element, attributes, windowCtrl) => {
      scope.title = attributes.title;
      var startX = 0, startY = 0, x = 0, y = 0;

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        windowCtrl.moveTo(x,y);
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  }
});
