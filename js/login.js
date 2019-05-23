$(($)=>{
  $('#login-form').on('submit', (e)=>{
    console.log("submitted")

    e.preventDefault()
    //session.logout()
    // make post

    $.post('/api/users/auth',$('#login-form').serialize() , response=>{

      console.log(response)
    })

  })


})

