import _ from 'lodash';

const module = angular.module('XP', []);

module.config(function() {
});
module.run(($rootScope) => $rootScope._ = _);

export default module;
