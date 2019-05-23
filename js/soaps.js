$(($)=>{
  console.log('soaps.js... ')
  var path = window.location.pathname


  $('#logonavbar').load('/partials/logonavbar.html')
  $('#menunavbar').load('/partials/menunavbar.html', function(){
    $(`#menunavbar a[href="${path}"]`).addClass('selected').removeAttr("href");
    }
  )


  var app = new Vue({
    el: '#soaps_section',
    data: {
      soaps: []
    }
  })


  $.getJSON('data/soaps.json', function(soaps){
      console.log("got soaps")
      app.soaps = soaps


  })

  console.log("here too")

})

