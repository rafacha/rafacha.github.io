$(($)=>{
  console.log('soap.js... ')
  var path = window.location.pathname
  const urlParams = new URLSearchParams(window.location.search);
  const soap_name = urlParams.get('name');


  $('#logonavbar').load('/partials/logonavbar.html')
  $('#menunavbar').load('/partials/menunavbar.html', function(){
    $(`#menunavbar a[href="${path}"]`).addClass('selected').removeAttr("href");
    }
  )

  Vue.filter('currency', function (value) {
      return '$' + parseFloat(value).toFixed(2);
  });

  $.getJSON('data/soaps.json', function(soaps){
      // $.getJSON('data/ingredients.json')
      console.log("got soaps")
      var soap = soaps.find( e=>{return e.name===soap_name} )

      if(!soap){
        soap = { name:"No existe", ingredients:[]}
        }

      var app = new Vue({
        el: '#soap_section',
        data: {
          soap: soap,
          styleObject: {
            height: "100vh",
            background: `url(${soap.image}) center center no-repeat fixed`,

            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover'
          }
        }
      })

  })


})

// <style type="text/css" media="screen">
//   body {
//     background: url('<%= product.photo.big.url %>') center center no-repeat fixed;
//       -webkit-background-size: cover;
//       -moz-background-size: cover;
//       -o-background-size: cover;
//     background-size: cover;
//     height: 101%;
//   }
// </style>
