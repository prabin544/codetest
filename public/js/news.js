$(document).ready(function(){
    $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=FG4ikXBDwp0kgd1YsnyH0B2VmrDDZuD9",
        success:function(data){
            console.log(data.results)

            for (var i in data.results){
                console.log(data.results[i].title);

                // $('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card"><div class="card-body"><img src="' + data.results[i].multimedia[i].url +'" class="card-img-top"><h4 class="card-title">'+ data.results[i].title +'</h4><p class="card-text">' + data.results[i].abstract +'</p><a href="' + data.results[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
                $('#result').append('<div class="card"><img src="' + data.results[i].multimedia[i].url +'"><div class="container"><h4><b>' + data.results[i].title +'</b></h4><p>'+ data.results[i].abstract +'</p><a href="' + data.results[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a</div></div>');
            }


        },
        error:function(xhr){
            var err = JSON.parse(xhr.responseText);
            alert(err.message);
        }
    })



})