(function () {
  'use strict';

  describe('Give it some context', function () {

    describe('maybe a bit more context here', function () {
  
      it('should run here few assertions', function () {
      	var req = {};

      	spyOn($, 'getJSON').and.callFake(function(){
      		
      	});
      	var cart = window.cart.init();
        expect(true).toBe(true);
      });
  
    });
  
  });

})();
