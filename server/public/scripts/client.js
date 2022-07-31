console.log('scripts sourced');

$(readyNow);

function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', addMe);
    $('#subtract-button').on('click', subtractMe);
    $('#multiply-button').on('click', multiplyMe);
    $('#divide-button').on('click', divideMe);
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

function getMath() {
    $.ajax({
        type: 'GET',
        url: '/calculator'
    }).then(function (response){
        console.log(response);
        $('#mathAnswer').empty();
        $('#history').empty();
        $('#mathAnswer').append(`
            ${response[(response.length - 1)].answer}
        `)
        for (let myMath of response){
            $('#history').append(`
            <li>${myMath.inputOne} ${myMath.mathInput} ${myMath.inputTwo} = ${myMath.answer}</li>
            `)
        }
    })
}


function equalMe() {
    console.log('in equalMe');
    if($('#first-input').val() === '' || $('#second-input').val() === '' || mathMe === ''){
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
    }).then(function(response){
        console.log(response);
        getMath();
    });
}

function clearMe() {
    console.log('in clearME');
    $('#first-input').val('');
    $('#second-input').val('');
    mathMe = ''
}