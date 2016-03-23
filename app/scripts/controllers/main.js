'use strict';

/**
 * @ngdoc function
 * @name recorderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recorderApp
 */
angular.module('recorderApp')

  .controller('AudioCtrl',function(MyRecorder,$scope){
    $scope.startRecording=MyRecorder.startRecording;
    console.log('AudioCtrl loaded');
  })
  .controller('MainCtrl',function () {
    console.log('MainCtrl loaded');
  });
