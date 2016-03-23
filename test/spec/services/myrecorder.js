'use strict';

describe('Service: MyRecorder', function () {

  // load the service's module
  beforeEach(module('recorderApp'));

  // instantiate service
  var MyRecorder;
  beforeEach(inject(function (_MyRecorder_) {
    MyRecorder = _MyRecorder_;
  }));

  it('should do something', function () {
    expect(!!MyRecorder).toBe(true);
  });

});
