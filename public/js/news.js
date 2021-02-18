$(document).ready(function(){
    $('#search').click(function(){

        var term=$('#search_term').val();

        $.ajax({
            url:'https://newsapi.org/v2/everything?q=' + term +'&apiKey=ff4fdc1a967240ca9d03b810d90e64ff',
            success:function(data){
                $('#result').empty();

                for (var i in data.articles){

                $('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card"><div class="card-body"><img src="' + data.articles[i].urlToImage +'" class="card-img-top"><h4 class="card-title">'+ data.articles[i].title +'</h4><p class="card-text">' + data.articles[i].description +'</p><a href="' + data.articles[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
            }


            },
            error:function(){
                alert("Some error occured");
            }
        })

    })



    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?country=jp&apiKey=ff4fdc1a967240ca9d03b810d90e64ff",
        success:function(data){

            for (var i in data.articles){
                //console.log(data.articles[i].title);

                $('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card"><div class="card-body"><img src="' + data.articles[i].urlToImage +'" class="card-img-top"><h4 class="card-title">'+ data.articles[i].title +'</h4><p class="card-text">' + data.articles[i].description +'</p><a href="' + data.articles[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
            }


        },
        error:function(){
            alert('Some error occured');
        }
    })



})