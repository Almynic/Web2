/**
 * Created by Nicolas on 04.03.2016.
 */

describe("Application", function() {
    var application;

    beforeEach(function () {
        application = new Application();
    });

    it("Should give out 'Hello World'", function () {
        expect(application.helloWorld()).toEqual("Hello World");
    });
});