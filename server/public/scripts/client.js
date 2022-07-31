console.log('scripts sourced');

$(readyNow);

function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', addMe);
    $('#subtract-button').on('click', subtractMe);
    $('#multiply-button').on('click', multiplyMe);
    $('#submit-button').on('click', equalMe);
    $('#clear-button').on('click', clearMe)
} // End readyNow

let mathMe = ''

function addMe(){
    console.log('in addMe', mathMe);
    mathMe = '+'

} // End addMe

function subtractMe() {
    console.log('in subtractMe', mathMe);
    mathMe = '-'
} // End subtractMe

function multiplyMe() {
    console.log('in multiplyMe', mathMe);
    mathMe = '*'
} // End multiplyMe

function divideMe() {
    console.log('in divideMe', mathMe);
    mathMe = '/'
} // End DivideMe

function equalMe() {
    console.log('in equalMe');
    if($('#first-input').val() === '' || $('#second-input').val() === '' || mathMe === '')){
        alert('add inputs')
    }
    $.ajax({
        type: 'POST',
        url: '/calculator',
        data: {
            inputOne: $('#first-input').val(),
            inputTwo: $('#second-input').val(),
            mathInput: mathMe
        }
    }).then(function(respone){
        console.log(response);
    })
}

function clearMe(params) {
    console.log('in clearME');
}