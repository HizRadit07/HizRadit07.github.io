$(function (){
    const name = "Hizkia%20Raditya%20Pratama%20Roosadi"
    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/firebase/user/name/${name}`,
        success: function(data){
                document.getElementById('profile-name').innerHTML = data.Name
        }
    });
});

$(function (){
    const user_id = "59VwMIMM4pKrK1MjFhRr"
    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/firebase/about/${user_id}`,
        success: function(data){
            var about = data.Description 
            document.getElementById('about-description').innerHTML = about
        }
    });
});

$(function (){
    var experience = $('#experience_list');
    const user_id = "59VwMIMM4pKrK1MjFhRr"
    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/firebase/experience/${user_id}`,
        success: function(data){
            $.each(data, function(i, record){
                //console.log(record.fields)
                experience.append(`
                    <div role="listitem" class="w-dyn-item">
                        <div class="div-block-11">
                            <img height="50" loading="lazy" width="50" src="`+record["Company Logo"]+`" alt="">
                            <div><h4>`+record["Job Title"]+`</h4>
                                <div class="div-block-12">
                                    <div>`+record["Company Name"]+`</div><div>-</div><div>`+record["Job Type"]+`</div>
                                </div><div class="div-block-13"><div class="text-block-3">`+record["Date Start"]+`</div><div>-</div><div>`+record["Date End"]+`</div>
                            </div><div class="text-block-4">`+record["Location"]+`</div>
                        <div class="rich-text-block-3 w-richtext"><p>`+record["Description"]+`</p></div></div>
                    </div>`
                    )
                }
            )
        }
    });
});
