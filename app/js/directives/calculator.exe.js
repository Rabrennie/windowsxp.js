import module from '../module'

module.directive('calculator', () => {

  return {
    restrict: 'E',
    replace:false,
    scope: {
      title: '@',
      content: '@'
    },
    template : `<window title="{{ title }}">
                  <input type="text" ng-model="display">
                  <a href='#' ng-repeat="button in buttons" ng-click="button.func()">{{ button.name }}</a>
                </window>`,
    link: (scope) => {
      scope.buttons = [{ name:'+', func:() => { scope.addOperator('add') } },
                       { name:'=', func:() => { scope.evaluate() } },
                       { name:'-', func:() => { scope.addOperator('sub') } }]

      for (let i = 0; i < 10; i++) {
        scope.buttons.push({ name:i, func:() => { scope.addToDisplay(i) } })
      }

      scope.addOperator = (op) => {
        scope.buffer.push(scope.display);
        scope.operator = op
        scope.reset = true;
      }

      scope.evaluate = () => {
        const val1 = scope.buffer[scope.buffer.length-1];
        const val2 = scope.display;

        if(scope.operator === 'add') {
          scope.display = val1 + val2;
        }
        if(scope.operator === 'sub') {
          scope.display = val1 - val2;
        }
        scope.buffer.push(scope.display);
      }

      scope.addToDisplay = (n) => {
        if(scope.display === 0 || scope.reset) {
          scope.display = n;
          scope.reset = false;
        } else {
          scope.display = parseInt(scope.display + '' + n)
        }
      }

      scope.reset = false;
      scope.display=0
      scope.buffer = [];
      scope.operator='none'
    }
  }
});
