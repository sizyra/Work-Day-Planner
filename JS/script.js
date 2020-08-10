function update() {
    var today = new Date()
    
    $('#date').text(today)

    $('.hourblock').each(function() {
        var hours = $(this).data('hours');
        var hourDif = today.getHours() - hours;

        if (hourDif < 0) {
            $(this).find('textarea').addClass('future');
        } else if (hourDif > 0) {
            $(this).find('textarea').addClass('past');
        } else {
            $(this).find('textarea').addClass('present');
        }

        $(this).find('textarea').val(localStorage.getItem(hours));
    })
};

$('button').on('click', function() {
    var textValue = $(this).closest('.hourblock').find('textarea').val();

    localStorage.setItem($(this).closest('.hourblock').data('hours'), textValue);
})
update();