import module from '../module'

module.directive('taskbar', () => {
  return {
    restrict: 'E',
    template : `<div class="task-bar"><div class="start-button">Start</div></div>`
  }
});
