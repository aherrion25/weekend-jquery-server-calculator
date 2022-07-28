console.log('scripts sourced');

$(readyNow);

function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', addMe);
    $('#subtract-button').on('click', subtractMe);
    $('#multiply-button').on('click', multiplyMe);
    $('#submit-button').on('click', equalMe)
} // End readyNow

function addMe(){
    console.log('in addMe');

} // End addMe

function subtractMe() {
    console.log('in subtractMe');
} // End subtractMe

function multiplyMe() {
    console.log('in multiplyMe');
} // End multiplyMe

function divideMe() {
    console.log('in divideMe');
} // End DivideMe

function equalMe() {
    console.log('in equalMe');
}