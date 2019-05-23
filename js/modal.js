(function($) {
  $.fn.modalize = function(opts={}){
    let open  =           opts.open  || '.open-modal'
    let close =           opts.close || '.close-modal'
    let backdropclose =   opts.backdropclose===undefined?true:opts.backdropclose
    let modal = this

    $(open).click(function(){
      modal.addClass('modal-open')
    })
    // close modal
    $(close).click(function(){
      modal.removeClass('modal-open')
    })
    if(backdropclose){
      $(`.modal-inner`).click(function(){
        modal.removeClass('modal-open')
      })
      $('.modal-content').click(function(e){ e.stopPropagation()})
    }

    return this
  }

  $.fn.modal = function(action){
    if(action==='open'){
      this.addClass('modal-open')
    }
    if(action==='close'){
      this.removeClass('modal-open')
    }

  return this
  }

})(jQuery)

// // pug example
// #my-modal.modal
//   .modal-inner
//     .modal-content
//       .modal-close-icon
//         a.close-modal(href='javascript:void(0)')
//           i.fa.fa-times(aria-hidden='true')
//       .modal-content-inner
//         h4 This is the heading
//         p Donec volutpat nisi nisl, sit amet facilisis enim lobortis sed.
//       hr.modal-buttons-seperator
//       .modal-buttons
//         button.button.close-modal Cancel
//         button.button.button-primary.close-modal OK
