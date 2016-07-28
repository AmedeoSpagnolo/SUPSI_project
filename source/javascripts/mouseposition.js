$(document).ready(function(){
  d3.select('body').on('mousemove', function () {
    var c = d3.mouse(this),
        w = $(document).width(),
        h = $(document).height(),
       mx = (c[0] - w / 2),
       my = (c[1] - h / 2);
    $('#info_latitude').html(parseInt(mx,10))
    $('#info_longitude').html(parseInt(my,10))
   })
});
