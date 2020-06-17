(function(){
  'use strict';

  angular.module('common')
  .service('MyInfoService',MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService(){
    var service = this;
    service.myInfo = {};

    service.setMyInfo = function(myInfo){
      service.myInfo = myInfo;
    };

    service.getMyInfo = function(){
      return service.myInfo;
    };
  }
})();
