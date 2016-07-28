$( document ).ready(function() {

  $(document)
    .on('click', '#SpaceBtn', function(){
      openModalPass()
  })

  $(document)
    .on('click', '#bg_modal', function(){
    console.log('asdasda')
    closeModalPass()
  })

  function openModalPass(){
    $('body').addClass('modal_passport_open')
    $('#passport').show().css({
      'opacity': 1
    })
  }

  function closeModalPass(){
    $('body').removeClass('modal_passport_open')
    $('#passport').css({
      'opacity': 0
    }).hide()
  }

});


