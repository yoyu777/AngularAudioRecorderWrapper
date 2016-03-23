'use strict';

describe('Service: AudioRecorder', function () {

  // load the service's module
  beforeEach(module('recorderApp'));

  // instantiate service
  var AudioRecorder;
  beforeEach(inject(function (_AudioRecorder_) {
    AudioRecorder = _AudioRecorder_;
  }));

  it('should do something', function () {
    expect(!!AudioRecorder).toBe(true);
  });

});
