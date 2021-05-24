const showData = function(data) {
    data.items.forEach(item => {
        console.log(" title : " +

            item.volumeInfo.title +
            "     ISBN:    " + item.volumeInfo.industryIdentifiers[0].identifier +
            "    Author: " + item.volumeInfo.authors
        )
    });

}

const findBook = function(queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=' +
            queryType + ':' + queryValue + '',
        success: showData
    })
}

findBook("title", "How to Win Friends and Influence People")