 /* create a librar system with the following:
 1.add book to the library
 2.delete  a book from library
 3.udate library
 4. get a book from library
 5. view all books in library*/

//  let library = [
//     {
//         title:"fresh water",
//         author: "Akawaeke Emezi",
//         year: 2017
//     },

//     {
//         title:"Thing Fall Apart",
//         author: "chinua Achebe",
//         year:  1958
//     },
//     {
//         title:"The girl with the louding voice",
//         author: "Abi Dare",
//         year:  2020
//     }
//  ]
//    console.log("list of books before ", library);
   

//   function addTOLibrary( title,author,year){
//        let newCollection = {
//            title:title,
//            author:author,
//            year:year
//         } 
//         library.push(newCollection)
//     }

//    addTOLibrary("Stay with me","ayobami adebayo", 2017)
//    addTOLibrary("Americanah","chimamanda Ngozi", 2013)
//    console.log("list after adding new collection",library);

// //    function deleteABook( library,title){
// //        let index = library.findIndex((library) => library.title === title);
// //        if (index !== -1){
// //         library.splice(index,1)
// //        }
// //        return library;
// //    }
   
// //    console.log("list after deleting a book",deleteABook(library,"The girl with the louding voice"));
        
// //    function updateLibraray(){
     
// //    }

// function deleteABook( ){
//     library.pop()
//      console.log("student data base after deleting a student",library)
//    }
//    deleteABook()
   

   

let bookLibrary =[{
    author: "Akawaeke Emezi",
    title:"fresh water",
    number:  1
},
{
    author: "chinua Achebe",
    title:"Thing Fall Apart",
    number:  2
},

{
    author: "Abi Dare",
    title:"The girl with the louding voice",
    number:  3
}


];

function addsABook(author, title,){
    let bookNumber = bookLibrary.length+1;
    let book ={
        author : author,
        title : title,
        bookNumber : bookNumber
    }
    bookLibrary.push(book)
}

addsABook("ayobami adebayo", "Stay with me",)
addsABook("chimamanda Ngozi", "Americanah")

console.log(bookLibrary)


function deleteBook(number){
    bookLibrary.splice((number -1), 1)
}
deleteBook(2)
console.log("book library after deleting a book", bookLibrary)


function bookUpdate(author, title, bookNumber){
    for(let i=0; i< bookLibrary.length; i++){
        if(bookLibrary[i].title.toLowerCase() ==title.toLowerCase()){
            return bookLibrary
        }else{
            bookLibrary.push({
                author: author,
                title: title,
                bookNumber: bookNumber
            });
            break
        
        }
    }
}

bookUpdate("cyprain Ekwensi", "Passport of Mallam Ilia", 6)
console.log(bookLibrary)

let result =[];
function getBook(author){
for(let i = 0; i<bookLibrary.length; i++){
        if(bookLibrary[i].author.toLowerCase() === author.toLowerCase() ){
            result.push(bookLibrary[i])
            
        }
    }
    return result
}

console.log("Get a book", getBook("cyprain Ekwensi"))

for (let i = 0; i < bookLibrary.length; i++) {
    let keys = Object.keys(bookLibrary[i]);
    let values = Object.values(bookLibrary[i]);

    console.log("Book", i + 1);
    console.log("Keys:", keys);
    console.log("Values:", values);

    keys.forEach((key, index) => {
        console.log(`${key}: ${values[index]}`);
    });

    console.log("-----");
}