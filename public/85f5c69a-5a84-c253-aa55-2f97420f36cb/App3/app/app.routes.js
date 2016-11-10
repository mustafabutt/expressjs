/// <reference path='../assets/typings/angular.d.ts' />
/// <reference path='../assets/typings/angular-ui-router.d.ts' />
/// <reference path='../assets/typings/angular-resource.d.ts' />
/// <reference path='components/teacher/teacherCreateCtrl.ts' />
/// <reference path='components/student/studentCreateCtrl.ts' />

/// <reference path='components/teacher/teacherEditCtrl.ts' />
/// <reference path='components/student/studentEditCtrl.ts' />

/// <reference path='components/teacher/teacherDeleteCtrl.ts' />
/// <reference path='components/student/studentDeleteCtrl.ts' />

/// <reference path='components/teacher/teacherListCtrl.ts' />
/// <reference path='components/student/studentListCtrl.ts' />

/// <reference path='components/teacher/teacherDetailsCtrl.ts' />
/// <reference path='components/student/studentDetailsCtrl.ts' />

/// <reference path='components/teacher/teacherService.ts' />
/// <reference path='components/student/studentService.ts' />



/// <reference path='../assets/typings/restangular.d.ts' />
var app=    angular.module('App3');
app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/teacher");
        $urlRouterProvider.otherwise("/student");


        $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/components/app/app-home.html",
                    controller: 'appHomeCtrl',
                    controllerAs: 'vm'
                })
            .state('login', {
                url: "/login",
                templateUrl: "app/components/app/app-login.html",
                controller: 'appLoginCtrl',
                controllerAs: 'vm'
            })
.state('teacher-list', { url: "/teacher", templateUrl: "app/components/teacher/teacher-list.html", controller: 'App3.teacherListCtrl', controllerAs: 'vm' })
.state('student-list', { url: "/student", templateUrl: "app/components/student/student-list.html", controller: 'App3.studentListCtrl', controllerAs: 'vm' })


.state('teacher-new', { url: "/teacher/new", templateUrl: "app/components/teacher/teacher-create.html", controller: 'App3.teacherCreateCtrl', controllerAs: 'vm' })
.state('student-new', { url: "/student/new", templateUrl: "app/components/student/student-create.html", controller: 'App3.studentCreateCtrl', controllerAs: 'vm' })


.state('teacher-details', { url: "/teacher/:id", templateUrl: "app/components/teacher/teacher-details.html", controller: 'App3.teacherDetailsCtrl', controllerAs: 'vm' })
.state('student-details', { url: "/student/:id", templateUrl: "app/components/student/student-details.html", controller: 'App3.studentDetailsCtrl', controllerAs: 'vm' })


.state('teacher-edit', { url: "/teacher/edit/:id", templateUrl: "app/components/teacher/teacher-edit.html", controller: 'App3.teacherEditCtrl', controllerAs: 'vm' })
.state('student-edit', { url: "/student/edit/:id", templateUrl: "app/components/student/student-edit.html", controller: 'App3.studentEditCtrl', controllerAs: 'vm' })


.state('teacher-delete', { url: "/teacher/delete/:id", templateUrl: "app/components/teacher/teacher-delete.html", controller: 'App3.teacherDeleteCtrl', controllerAs: 'vm' })
.state('student-delete', { url: "/student/delete/:id", templateUrl: "app/components/student/student-delete.html", controller: 'App3.studentDeleteCtrl', controllerAs: 'vm' })


    });
