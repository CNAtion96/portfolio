(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('mainController', function(API, $scope, $location) {
            const vm = this;

            $scope.isActive = function(route) {
                return route === $location.path();
            };
            
            let projects = API.getProjects();
            projects.then(res => {
                vm.projects = res.data;
                console.log(vm.projects);
            })

            vm.setId = function(id){
                localStorage.setItem('id', id);
            }

            vm.getProject= function(id){
                let singleProject = API.getSingleProject(id);
                singleProject.then(res => {
                    vm.singleProject = [res.data];
                    console.log(vm.singleProject);
                })
            }
            vm.id = localStorage.getItem('id');
            vm.getProject(vm.id)
            

            // vm.slick = function(){
            //     $('.projectImages').slick({
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: false,
            //         fade: true,
            //         asNavFor: '.slider-nav'
            //     });
            //     $('.projectImagesNav').slick({
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //         asNavFor: '.slider-for',
            //         dots: true,
            //         centerMode: true,
            //         focusOnSelect: true
            //     });
            // }
            // // vm.slick();
            // setTimeout(vm.ready = true ,100);
            

            vm.addProject= function() {
                alert('test');
                vm.project.images = vm.images.split(', ');
                let project = vm.project;
                let newProject = Object.assign({}, project);
                console.log(newProject);
                let addNewProject = API.addProject(newProject);
                addNewProject.then(response=>{
                    console.log(response);
                    vm.projects = response.data;
                    console.log(vm.projects);
                })
                vm.images = "";
                vm.project = {};
            }

            vm.type = function(){
                Typed.new('.typing-title', {
                    strings: ["a Front-end Developer","a Movie Lover","a Book Worm","a Wizard Harry"],
                    typeSpeed: 80, 
                    backDelay: 900, 
                    loop: true, 
                    loopCount: false, 
                });
            }
            vm.type();
           
        });
        
        
})();

