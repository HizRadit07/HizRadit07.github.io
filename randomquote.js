$(function (){
    $.ajax({
        type: 'GET',
        url: 'http://quotable.io/random',
        success: function(data){
            console.log('success', data)
            document.getElementById("randomquote")
                .innerHTML = `"${data.content}"`;
            document.getElementById("randomquote-author")
                .innerHTML = `- ${data.author}`;
        }
    });
});