const showData = function(data) {
    console.log(data)
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