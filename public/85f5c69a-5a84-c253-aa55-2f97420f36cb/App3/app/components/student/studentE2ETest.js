describe('Protractor Demo App', function () {
                             var baseURL = 'http://localhost:1288/apps/App3/#';
                             beforeEach(function () {
                             });
                             it('should have a title', function () {
                                 browser.get(baseURL + '/login');
                                 expect(browser.getTitle()).toEqual('App3');
                             });
                             it('Login', function () {
                                 browser.get(baseURL + '/login');
                                 element(by.model('vm.username')).sendKeys('az');
                                 element(by.model('vm.password')).sendKeys('123');
                                 element(by.buttonText('Login')).click();
                                 browser.waitForAngular();
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/');
                             })
                             it('student Create', function () {
                                 browser.get(baseURL + '/student');
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/student');
                                 var itemList = element.all(by.repeater('item in vm.list'));
                                 var startCount = itemList.count();
                                 element(by.linkText('Add')).click();
                                 browser.waitForAngular();
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/student/new');
                                 element(by.model('vm.newItem.id')).sendKeys('id1');
                                 element(by.model('vm.newItem.name')).sendKeys('name1');
                                 element(by.model('vm.newItem.rollNo')).sendKeys('rollNo1');
                                 element(by.model('vm.newItem.age')).sendKeys('age1');
                                 element(by.buttonText('Save')).click();
                                 browser.waitForAngular();
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/student');
                                 expect(itemList.count()).toEqual(startCount.then(function (count) {
                                     return count + 1;
                                 }));
                             });
                             it('student Delete', function () {
                                 browser.get(baseURL + '/student');
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/student');
                                 var itemList = element.all(by.repeater('item in vm.list'));
                                 var startCount = itemList.count();
                                 element.all(by.css('.deleteBtn')).last().click();
                                 browser.waitForAngular();
                                 element(by.linkText('Confirm Delete')).click();
                                 browser.waitForAngular();
                                 expect(browser.getCurrentUrl()).toEqual(baseURL + '/student');
                                 expect(itemList.count()).toEqual(startCount.then(function (count) {
                                     return count - 1;
                                 }));
                             });
                         });
                         