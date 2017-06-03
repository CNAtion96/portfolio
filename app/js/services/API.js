(function() {
    'use strict';

    angular
        .module('portfolio')
        .factory('API', function($http){

            return{
                addProject: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `http://localhost:8080/project`
                    })
                },
                getProjects: () => {
                    return $http({
                        method:"GET",
                        url: `http://localhost:8080/project`
                    })
                },
                getSingleProject: (id) => {
                    return $http({
                        method:"GET",
                        url: `http://localhost:8080/project/${id}`
                    })
                },
            }
         });
        
})();