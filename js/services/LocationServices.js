app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "https://notepadsaas-fiap.herokuapp.com";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])