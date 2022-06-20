$(function (){
    const name = "Hizkia%20Raditya%20Pratama%20Roosadi"
    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/user/name/${name}`,
        success: function(data){
            //this is bad practice, but for the sake of learning,
            //we use only the first data in records, since only my profile is needed
            document.getElementById('profile-name').innerHTML = data.records[0].fields.Name
        }
    });
});

$(function (){
    const name = "Hizkia%20Raditya%20Pratama%20Roosadi"
    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/about/${name}`,
        success: function(data){
            //console.log('success', data)
            //efficiency second, this is just to familiarize me
            var about = data.records[0].fields.Description //for now still hardcoded my own id here
            document.getElementById('about-description').innerHTML = about
        }
    });
});

$(function (){
    var experience = $('#experience_list');
    const name = "Hizkia%20Raditya%20Pratama%20Roosadi"

    $.ajax({
        type: 'GET',
        url: `https://my-fastapi-airtable.herokuapp.com/experience/${name}`,
        success: function(data){
            //console.log('success', data.records[0].fields["Company Logo"][0].url)
            //TODO: foreach item in data, append a list item
            $.each(data.records, function(i, record){
                //console.log(record.fields)
                if(record.fields["User"][0] == "rec0edkqSx4BJUoXR"){ //only filter experience with my id, need to secure this
                    experience.append(`
                    <div role="listitem" class="w-dyn-item">
                        <div class="div-block-11">
                            <img height="50" loading="lazy" width="50" src="`+record.fields["Company Logo"][0].url+`" alt="">
                            <div><h4>`+record.fields["Job Title"]+`</h4>
                                <div class="div-block-12">
                                    <div>`+record.fields["Company Name"]+`</div><div>-</div><div>`+record.fields["Job Type"]+`</div>
                                </div><div class="div-block-13"><div class="text-block-3">`+record.fields["Date Start"]+`</div><div>-</div><div>`+record.fields["Date End"]+`</div>
                            </div><div class="text-block-4">`+record.fields["Location"]+`</div>
                        <div class="rich-text-block-3 w-richtext"><p>`+record.fields["Description"]+`</p></div></div>
                    </div>`
                    )
                }
            })
        }
    });
});