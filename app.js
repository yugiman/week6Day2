let start = $('.start');
for (i = 0; i <4; i++){
    $(start).append('<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>');
}
$('.start').on('click', '.square', function(){
    let hi = $(this);
    $(hi).toggleClass('squareClicked');
});