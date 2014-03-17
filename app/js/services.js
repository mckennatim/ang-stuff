'use strict';

/* Services */
/*
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._;
}); 
*/
var stuffAppServices = angular.module('stuffAppServices', []);
stuffAppServices.factory('ItemsData', function() {
  var lsid = 'groceries';
  var inidata = [
    {lid:'26',product:'banana', done:false},
    {lid:'26',product:'coffee', done:false},
    {lid:'26',product:'brown sugar', done:false},
    {lid:'26',product:'bacon', done:false},
    {lid:'26',product:'apples', done:false},
    {lid:'26',product:'brown gravy', done:true},
    {lid:'26',product:'bags', done:true},
    {lid:'26',product:'applesauce', done:true},
    {lid:'26',product:'sugar', done:true},
    {lid:'26',product:'baby back ribs', done:true},
    {lid:'26',product:'apple butter', done:true}
  ];
    return {
    get: function () {
      var ret = JSON.parse(localStorage.getItem(lsid)) || inidata;
      //console.log(ret);
      return ret;
    },
    put: function(list){
      console.log(list);
      localStorage.setItem(lsid, JSON.stringify(list));
    },
    kitty: 'mabibi'
  };
});
