$('#username').value = ''
$('#age').value = ''
$('#comments').value = ''
$('#address').value = ''

$('#username').addEventListener('input', function(){
  $('#username-error-msg').innerHTML = ''
  // validate username length between 5-15 characters
  if($('#username').value.length < 5 || $('#username').value.length > 15){
    $('#username-error-msg').innerHTML = 'Use 5-15 characters'
  }
  // validate username cannot contain space
  else if($('#username').value.indexOf(' ') > 0){
    $('#username-error-msg').innerHTML = 'Username cannot contain space'
  }
})

$('#age').addEventListener('input', function(){
  $('#age-error-msg').innerHTML = ''
  // validate age should be numbers
  if(isNaN(ageField.value)){
    $('#age-error-msg').innerHTML = 'Age should be numbers'
  }
})

$('#address').addEventListener('input', function(){
  $('#address-error-msg').innerHTML = ''
  // validate address should be ended with 'Street'
  if($('#address').value.endsWith('Street') == false){
    $('#address-error-msg').innerHTML = "Address should be ended with 'Street'"
    }
})

$('#comments').addEventListener('input', function(){
  $('#comments-error-msg').innerHTML = ''
  // validate username length between 5-500 characters
  if($('#comments').value.length < 5 || $('#comments').value.length > 500){
    $('#comments-error-msg').innerHTML = 'Use 5-500 characters'
  }
})

$('#submit').addEventListener('click', function(){
  // validate if value is empty
  if($('#username').value == ''){
    $('#username-error-msg').innerHTML = 'Enter your username'
  }
  if($('#age').value == ''){
    $('#age-error-msg').innerHTML = 'Enter your age'
  }
  if($('#address').value == ''){
    $('#address-error-msg').innerHTML = 'Enter your address'
  }
  if($('#comments').value == ''){
    $('#comments-error-msg').innerHTML = 'Enter your comments'
  }
  else {
    $('.modals').style.display = 'flex'
    $('.modals').addEventListener('click', function(){
      $('.modals').style.display = 'none'
      window.location.href = 'index.html'
    })
  }
})