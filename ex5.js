let query = "cat"

$("button").on("click", function() {
    query = $("input").val()
    render()



})




const render = function() {
    $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=" + query +
            "&api_key=4fQJo9HPRsCdwBZ3mdHlinnUQ2RrRbh4&limit=5",
        success: function(response) {
            $("#imageAPI").attr("src", response.data[0].embed_url);
        },
        error: console.log("ERROR")
    });
}
render()
















//// ============================== OLD METHOD ++++++GET+++++++++++++
// const render = function() {
//     var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=4fQJo9HPRsCdwBZ3mdHlinnUQ2RrRbh4&limit=5");

//     xhr.done(function(response) {

//         //console.log("success got data", response.data);
//         console.log("success got data", response.data[0].embed_url);
//         $("#imageAPI").attr("src", response.data[0].embed_url);
//         //data[0].url
//     });
// }