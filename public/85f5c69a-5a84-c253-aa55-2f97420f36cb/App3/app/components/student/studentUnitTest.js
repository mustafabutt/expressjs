describe('Controllers', function () {
                             beforeEach(module('App3'));
                             var location;
                             var $controller;
                             var mockedService = {
                                 data: [
                                     { id: 1, value: 'temp' },
                                     { id: 2, value: 'temp' },
                                     { id: 3, value: 'temp' },
                                     { id: 4, value: 'temp' }
                                 ],
                                 query: function (data,next) {
                                     next(this.data, {});
                                 },
                                 save: function (item, next) {
                                     next({});
                                 },
                                 get: function (item, next) {
                                    next(this.data[item.Id-1]);
                                 },
                                 save: function (item,next) {
                                     next({});
                                 },
                                 delete: function (id,next) {
                                     next({});
                                 }
                             };
                             beforeEach(inject(function (_$controller_, $location) {
                                 $controller = _$controller_;
                                 location = $location;
                             }));
                             describe('studentListCtrl', function () {
                                 it('should set proper list', function () {
                                     var controller = $controller('studentListCtrl', { studentService: mockedService });
                                     expect(controller.list).toEqual(mockedService.data);
                                 });
                             });
                             describe('studentCreateCtrl', function () {
                                 it('should add item and navigate', function () {
                                     var controller = $controller('studentCreateCtrl', { studentService: mockedService });
                                     controller.newItem = {};
                                     controller.addNew();
                                     expect(location.path()).toEqual('/student');
                                 });
                             });
                             describe('studentDetailsCtrl', function () {
                                 it('should pass correct id for details', function () {
                                     var mockedParams = {
                                         id: 2
                                     }
                                     var controller = $controller('studentDetailsCtrl',
                                         {
                                             studentService: mockedService,
                                             $stateParams: mockedParams
                                         });
                                     expect(controller.item.id).toEqual(mockedParams.id);
                                 });
                             });
                             describe('studentEditCtrl', function () {
                                 it('should pass correct id for edit', function () {
                                     var mockedParams = {
                                         id: 3
                                     }
                                     var controller = $controller('studentEditCtrl',
                                         {
                                             studentService: mockedService,
                                             $stateParams: mockedParams
                                         });
                                     expect(controller.editItem.id).toEqual(mockedParams.id);
                                     controller.save();
                                     expect(location.path()).toEqual('/student');
                                 });
                             });
                             describe('studentDeleteCtrl', function () {
                                 it('should pass correct id for delete', function () {
                                     var mockedParams = {
                                         id: 4
                                     }
                                     var controller = $controller('studentDeleteCtrl',
                                         {
                                             studentService: mockedService,
                                             $stateParams: mockedParams
                                         });
                                     controller.delete();
                                     expect(location.path()).toEqual('/student');
                                 });
                             });
                         });
                         