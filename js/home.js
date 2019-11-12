let index = 0
$('#num-' + index).style.backgroundColor = 'orange'

setInterval(function(width) {
  $('#num-' + index).style.backgroundColor = 'lightgoldenrodyellow'
  index++
  if (index > 4) index = 0
  else if (index < 0) index = 0
  $('.slider').style.marginLeft = `${index*-640}px`
  $('#num-' + index).style.backgroundColor = 'orange'
}, 3000)

$('#prev').addEventListener('click', function(width) {
  $('#num-' + index).style.backgroundColor = 'lightgoldenrodyellow'
  index--
  if (index < 0) index = 4
  else if (index < 0) index = 0
  $('#num-' + index).style.backgroundColor = 'orange'
  $('.slider').style.marginLeft = `${index*-640}px`
})

$('#next').addEventListener('click', function(width) {
  $('#num-' + index).style.backgroundColor = 'lightgoldenrodyellow'
  index++
  if (index > 4) index = 0
  $('#num-' + index).style.backgroundColor = 'orange'
  $('.slider').style.marginLeft = `${index*-640}px`
})