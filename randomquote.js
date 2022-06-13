$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://zenquotes.io/api/random',
        success: function(data){
            console.log('success', data)
        }
    });
});