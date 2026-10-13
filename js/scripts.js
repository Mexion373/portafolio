$(document).ready(function () {

  // Al hacer clic en cualquier botón con la clase btn-video
  $('.btn-video').on('click', function () {
    var video = $(this).data('video');
    var titulo = $(this).data('titulo');

    $('#modalTitulo').text(titulo);
    $('#videoFrame').attr('src', video);

    var modal = bootstrap.Modal.getOrCreateInstance($('#videoModal')[0]);
    modal.show();
  });

  // Al cerrar el modal, se vacía el video para que deje de sonar
  $('#videoModal').on('hidden.bs.modal', function () {
    $('#videoFrame').attr('src', '');
  });

});