$('.menu .item')
    .tab()
;

function hoverin() {
    document.getElementsByClassName('coreImg').style.display = 'none';
    document.getElementsByClassName('coreGif').style.display = 'block';
}

$('.coreImage').hover(function() {
    $(this).find('.coreImg').hide();
    $(this).find('.coreGif').show();
}, function() {
    $(this).find('.coreGif').hide();
    $(this).find('.coreImg').show();
});