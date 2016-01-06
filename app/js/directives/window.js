import module from '../module'

module.directive('window', () => {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template : `<div class="window">
                	<div class="title-bar">
                		<div class="title-bar-title">{{ title }}</div>
                		<div class="title-bar-close"></div>
                		<div class="title-bar-max"></div>
                		<div class="title-bar-min"></div>
                	</div>
                	<div class="content"><ng-transclude></ng-transclude></div>
              </div>`,


    link: (scope, element, attributes) => {
      scope.title = attributes.title;
    }
  }
});
