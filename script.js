const myLibrary = []

function Book(title, author , year, type) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.year = year;
    this.type = type;
}
function addBookToLibrary(title, author , year, type) {
    let book = new Book(title, author , year, type)
    myLibrary.push(book)
}

addBookToLibrary("title", "author" , "year", "type")
addBookToLibrary("title", "author" , "year", "type")
console.log(myLibrary)