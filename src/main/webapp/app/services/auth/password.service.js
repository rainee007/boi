(function() {
    'use strict';

    angular
        .module('boiApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('uaa/api/account/change_password', {}, {});

        return service;
    }
})();
