window.cart = (function(){

	var products = [];

	var list = function() {
		return products;
	};

	var remove = function(id) {

	};

	var add = function(product) {

	};

	var render = function(listProducts) {
		var productsDiv = $("#products");
		$.each(listProducts, function(i, val) {
			var line = $('#line>div').clone();
			productsDiv.append(line);

			$('[name=model-title]', line).text(val.title);
			$('[name=model-currencyFormat]', line).text(val.currencyFormat);
			
			formatPrice(val.price, line);
			products.push(val);
		});
	};

	var formatPrice = function(price, line) {
		var pricesplitted = Number(price).toFixed(2).toString().split(".");
		var priceArray = {price:pricesplitted[0],decimal:pricesplitted[1]};
		$('[name=model-price]', line).text(priceArray.price);
		$('[name=model-decimal]', line).text(priceArray.decimal);
	}

	function init() {
		$.getJSON("public/data/products.json").done(function( data ) {
      		render(data.products);
      	});
	}

	return {
		init: init,
		list: list,
		remove: remove,
		add: add
	};

})();

window.cart.init();