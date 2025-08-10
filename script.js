const myLibrary = []

function Book(title, author , year, type) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.year = year;
    this.type = type;
}

function addBookToLibrary(title, author , year, type) {
    let book = new Book(title, author , year, type);
    myLibrary.push(book);
}

addBookToLibrary("title", "author" , "year", "type")
addBookToLibrary("title", "author" , "year", "type")

const section = document.querySelector("section")

function showBook(book){
    const dis_book = document.createElement("div")

    dis_book.dataset.id = book.id;

    const img = document.createElement("img")
    img.src = 'book.png';  

    const del = document.createElement("button")
    del.id = "del"
    del.textContent = "del"
    del.addEventListener("click", () => {
        const bookId = dis_book.dataset.id;
        const index = myLibrary.findIndex(b => b.id === bookId);
        if (index > -1) {
            myLibrary.splice(index, 1); 
            dis_book.remove();           
        }
    });

    const info = document.createElement("div")
    info.classList.add("book-info")

    const author = document.createElement("div")
    author.textContent = book.author

    const title = document.createElement("div")
    title.textContent = book.title;

    const type = document.createElement("div")
    type.textContent = book.type;

    const year = document.createElement("div")
    year.textContent = book.year;

    info.append(del,title, author, type, year)
    dis_book.append(img, info)

    dis_book.classList.add("book-card")
    section.appendChild(dis_book)
}

function showLibrary(){
    for (const book of myLibrary) {
        showBook(book)
    }
}
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

showLibrary()

const btn1 = document.getElementById('new');
const btn2 = document.getElementById('exit');

const form = document.querySelector("form")

btn1.addEventListener('click', () => {
  form.classList.toggle('hidden');
  btn1.classList.toggle('hidden');
});
btn2.addEventListener('click', () => {
  form.classList.toggle('hidden');
  btn1.classList.toggle('hidden');
});

const add_book = document.getElementById('add');
const restart = document.getElementById('restart');

add_book.addEventListener("click", () => {
    const author = document.getElementById("author").value
    const title = document.getElementById("title").value
    const type = document.getElementById("type").value
    const year = document.getElementById("year").value

    
    addBookToLibrary(title, author , year, type)
    showBook(myLibrary.at(-1))
    restart.click()
})

restart.addEventListener("click", () => {
    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("type").value = ""
    document.getElementById("year").value = ""

})
