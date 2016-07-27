$( document ).ready(function() {

	$(document)
		.on('click', '#sign', function(){
      openModal()

  })

    
  $('#bg_hover').on('click', function(){
    closeModal()
  })

  function openModal(){
    $('.home').addClass('modal_open')
    $('#modal').show().css({
      'opacity': 1
    })
  }

  function closeModal(){
    $('.home').removeClass('modal_open')
    $('#modal').css({
      'opacity': 0
    }).hide()
  }

});


