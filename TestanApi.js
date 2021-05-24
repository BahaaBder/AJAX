const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
$("button").click(function() {
    // let teamName = $("input").val()
    // console.log(teamToIDs[teamName])

})
const render = function() {
    $.ajax({
        method: "GET",
        url: "http://data.nba.net/10s/prod/v1/2018/players.json",
        success: function(response) {
            for (let l in response.league) {
                for (let person of response.league[l]) {
                    if (person.teamId == "1610612748") {
                        console.log(person.firstName + "  " + person.lastName +
                            "  " + person.jersey + " " + person.pos)
                    }

                }

            }

        }
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