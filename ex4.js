var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=4fQJo9HPRsCdwBZ3mdHlinnUQ2RrRbh4&limit=5");
xhr.done(function(response) {
    //console.log("success got data", response.data);
    console.log("success got data", response.data[0].embed_url);
    $("#imageAPI").attr("src", response.data[0].embed_url);
    //data[0].url
});