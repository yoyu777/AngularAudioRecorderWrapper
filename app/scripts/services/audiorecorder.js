'use strict';

/**
 * @ngdoc service
 * @name recorderApp.AudioRecorder
 * @description
 * # AudioRecorder
 * Service in the recorderApp.
 */
var log=true;

angular.module('recorderApp')
  .service('AudioRecorder', function () {
    var config={ audio: true, video: false };
    function stream(s){
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var audioContext = new AudioContext();
      console.log("Audio initialised");
    }
    function error(e){
      console.log("getUserMedia not supported");
    }

    var context;
    function init() {
      try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        context = new AudioContext();

      }
      catch(e) {
        alert('Web Audio API is not supported in this browser');
      }
    }
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    navigator.getUserMedia( config, stream,error );

      //.then(function(mediaStream) { main();})
      //.catch(function(error) {catchError()});


  })
  //.service('ConsoleLog',function(message){
  //  return function(message) {
  //    if (log) {
  //      console.log(message);
  //    }
  //  }
  //})
;
