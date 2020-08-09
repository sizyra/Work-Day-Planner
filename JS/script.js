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
    })
};

update();