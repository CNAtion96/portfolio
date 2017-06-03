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
                        url: `https://portfoliobackend.herokuapp.com/project`
                    })
                },
                getProjects: () => {
                    return $http({
                        method:"GET",
                        url: `https://portfoliobackend.herokuapp.com/project`
                    })
                },
                getSingleProject: (id) => {
                    return $http({
                        method:"GET",
                        url: `https://portfoliobackend.herokuapp.com/project/${id}`
                    })
                },
            }
         });
        
})();