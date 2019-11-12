const $ = el => document.querySelector(el)

$('.navbar-mobile').style.display = 'none'
$('#child-mobile-1').style.display = 'none'
$('#child-mobile-2').style.display = 'none'

$('#burger').style.display = 'flex'
$('#burger').addEventListener('click', function(e) {
  $('.navbar-mobile').style.display = 'flex'
  $('#burger').style.display = 'none'
})

$('#x').addEventListener('click', function(e) {
  $('.navbar-mobile').style.display = 'none'
  $('#burger').style.display = 'flex'
})

$('down-span').addEventListener('click', function(e) {
  if($('#child-mobile-1').classList.contains('appear')) {
    $('#child-mobile-1').style.display = 'none'
    $('#child-mobile-2').style.display = 'none'
    $('#child-mobile-1').classList.remove('appear')
    $('#child-mobile-2').classList.remove('appear')
  }
  else {
    $('#child-mobile-1').style.display = 'flex'
    $('#child-mobile-2').style.display = 'flex'
    $('#child-mobile-1').classList.add('appear')
    $('#child-mobile-2').classList.add('appear')
  }
})

window.history.replaceState(null, null, ' ')