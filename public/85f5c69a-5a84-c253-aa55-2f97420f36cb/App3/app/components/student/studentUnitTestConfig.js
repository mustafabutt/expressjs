module.exports = function(config) {
                           config.set({
                         basePath: '../../../',
                             frameworks: ['jasmine'],
                             files: [
                                 'bower_components/angular/angular.min.js',
                                 'assets/js/ui-bootstrap-tpls-0.13.1.min.js',
                                 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                                 'bower_components/angular-resource/angular-resource.min.js',
                                 'assets/js/auth0-6.js',
                                 'assets/js/auth0-angular-4.js',
                                 'assets/js/angular-storage.js',
                                 'assets/js/angular-jwt.js',
                                 'app/app.module.js',
                                 'app/app.routes.js',
                                 'app/components/student/student**Ctrl.js',
                                 'bower_components/angular-mocks/angular-mocks.js',
                                 'app/components/student/studentUnitTest.js'
                             ],
                             exclude: [
                             ],
                             preprocessors: {
                             },
                             reporters: ['progress'],
                             port: 9876,
                             colors: true,
                             logLevel: config.LOG_INFO,
                             autoWatch: true,
                             browsers: ['Chrome'],
                             singleRun: false
                           });
                         };
                         