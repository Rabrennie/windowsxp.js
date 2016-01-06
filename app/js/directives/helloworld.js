import module from '../module'

module.directive('helloworld', () => {
  return {
    restrict: 'E',
    controller: 'HelloWorld',
    template : `<window title="{{ title }}">{{ content }}</window>`

  }
});
