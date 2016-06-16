(function() {
    'use strict';

    angular
        .module('boiApp')
        .factory('Activate', Activate);

    Activate.$inject = ['$resource'];

    function Activate ($resource) {
        var service = $resource('uaa/api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });

        return service;
    }
})();
