
$('#info-api-msg-container').on('click',(e)=>{
  $('#info-api-msg-container').fadeOut('fast')
})

$('#error-api-msg-container').on('click',(e)=>{
  $('#error-api-msg-container').fadeOut('fast')
})


window.flash={
  error: (text)=>{
    $('#error-api-msg-container').fadeIn('fast')
    $('#error-api-msg').text(text)
  },
  success: (text)=>{
    $('#info-api-msg-container').fadeIn('fast')
    $('#info-api-msg').text(text)
    
  }

}