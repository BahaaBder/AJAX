const showTitle = function(data) {
    // console.log(data.items[0].volumeInfo.title)
    console.log(data)

}

const findBookByISBN = function(ISBN) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + ISBN + '',
        success: showTitle
    })
}

findBookByISBN("9781945048470 ")