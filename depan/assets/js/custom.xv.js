// Scroll to anchor with scroll animation with slow
$('[data-toggle="scroll-1000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 1000);

    event.preventDefault();
});

$('[data-toggle="scroll-2000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 2000);

    event.preventDefault();
});

$('[data-toggle="scroll-3000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 3000);

    event.preventDefault();
});

$('[data-toggle="scroll-4000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 4000);

    event.preventDefault();
});

$('[data-toggle="scroll-5000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 5000);

    event.preventDefault();
});

$('[data-toggle="scroll-6000"]').on('click', function(event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0;

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate({
        scrollTop: $(hash).offset().top - offset
    }, 6000);

    event.preventDefault();
});