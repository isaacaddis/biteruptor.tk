jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        echo("Help.");
        if (command !== '') {
            if(command.lower()=="english"){
                window.location("english.html");
            }
            else if(command.lower()=="math"){
                window.location("math.html");
            }
            else if(command.lower()=="biology"){
                window.location("biology.html");
            }
            else if(command.lower()=="help"){
                term.echo("Enter clear to clear the console.")
            }
            else{
                term.echo("Enter: English, Math, or Biology to be redirected to it.");
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'BitEruptor Terminal',
        name: 'BitEruptor',
        height: 500,
        prompt: 'in> '
    });
});

$('select').material_select();
$('.datepicker').pickadate();
$('.dropwdown-button').dropdown();
$('.button-collapse').sideNav();
$('.slider').slider();

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});