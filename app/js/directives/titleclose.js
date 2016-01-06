import module from '../module'

module.directive('titleclose', ($document) => {
  return {
    restrict: 'E',
    require: '^window',
    template : `<div class="title-bar-close"></div>`,
    link: (scope, element, attributes, windowCtrl) => {

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        $document.on('mouseup', mouseup);
      });

      function mouseup() {
        windowCtrl.close()
        $document.off('mouseup', mouseup);
      }
    }
  }
});
