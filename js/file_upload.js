$("#file-upload").on('change', function(e){
  if ($(this).val() !== ''){
    file_path = $(this).val().split('\\')
    file_name = file_path[file_path.length - 1]
    $("[for=file-upload] .botton-text").text(`${file_name}`)
  }else{
    $("[for=file-upload] .botton-text").text('Seleccionar Imagen')
  }
})
