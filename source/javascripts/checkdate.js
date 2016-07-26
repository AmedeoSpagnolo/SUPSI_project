$( document ).ready(function() {

	for (var j = 0; j < $('[bdate]').length; j++) {
		var asd = ($('[bdate]')[j]).getAttribute('bdate')
		var qwe = moment(asd).format('MMM Do')
		// console.log(qwe + ' ')
		$($('[bdate]')[j]).html(qwe)
	}

});

