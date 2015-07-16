$(function(){

  // write your solution here.
var holder;


    var number1 = $('#number1 > .number').text();
    var number2 = $('#number2 > .number').text();
    var operation = $('#operation').text();
  $('#number1 > button.incr').click(function()
      {
        $('#number1 > .number').text(++number1);
      }
    );
    $('#number1 > button.decr').click(function()
      {
        $('#number1 > .number').text(--number1);
      }
    );
      $('#number2 > button.incr').click(function()
      {
        $('#number2 > .number').text(++number2);
      }
    );
    $('#number2 > button.decr').click(function()
      {
        $('#number2 > .number').text(--number2);
      }
    );
      $('#add').click(function()
      {
        $('#operation').text('+')
      }
     );
      $('#sub').click(function()
      {
        $('#operation').text('-')
      }
     );
      $('#mult').click(function()
      {
        $('#operation').text('*')
      }
     );
      $('#div').click(function()
      {
        $('#operation').text('/')
      }
     );

      $('#equals').click(function(){
        operation = $('#operation').text();
        var arr = [number1, operation, number2];
        var math = arr.join(" ")
        $('#result').text(eval(math));
      }
      );
});


