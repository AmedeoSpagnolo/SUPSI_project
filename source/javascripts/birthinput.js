$( document ).ready(function() {

	$(document)
		.on('click', '#sign', function(){
      openModal()

  })

  $('#bg_hover').on('click', function(){
    closeModal()
  })

  $('.star_selection').on('click', function(){
    app.sign = $(this).attr('selection')
    $('#sign').html(app.sign)
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
    $('#link_wrap').show()
  }

});


