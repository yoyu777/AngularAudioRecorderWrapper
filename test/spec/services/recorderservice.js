'use strict';

describe('Service: RecorderService', function () {

  // load the service's module
  beforeEach(module('recorderApp'));

  // instantiate service
  var RecorderService;
  beforeEach(inject(function (_RecorderService_) {
    RecorderService = _RecorderService_;
  }));

  it('should do something', function () {
    expect(!!RecorderService).toBe(true);
  });

});
