(function() {
    'use strict';

    angular
        .module('portfolio', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../partials/about.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                 .state('about', {
                    url: '/about',
                    templateUrl: '../partials/bio.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                .state('portfolio', {
                    url: '/portfolio',
                    templateUrl: '../partials/portfolio.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                .state('project', {
                    url: '/project/:projectName',
                    templateUrl: '../partials/project.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: '../partials/contact.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
                .state('resume', {
                    url: '/resume',
                    templateUrl: '../partials/resume.html',
                    controller: 'mainController',
                    controllerAs: 'vm'    
                })
        });
        
})();