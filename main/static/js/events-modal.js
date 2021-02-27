// $('.readModal').click(function() {
//     var readModalId = $(this).attr('id');
//     $('#modal-container').removeAttr('class').addClass(readModalId);
//     $('body').addClass('modal-active');
// })

$('.close').click(function() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
});