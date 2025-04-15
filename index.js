 /* create a librar system with the following:
 1.add book to the library
 2.delete  a book from library
 3.udate library
 4. get a book from library
 5. view all books in library*/

 let library = [
    {
        title:"fresh water",
        author: "Akawaeke Emezi",
        year: 2017
    },

    {
        title:"Thing Fall Apart",
        author: "chinua Achebe",
        year:  1958
    },
    {
        title:"The girl with the louding voice",
        author: "Abi Dare",
        year:  2020
    }
 ]
   console.log("list of books before ", library);
   

  function addTOLibrary( title,author,year){
       let newCollection = {
           title:title,
           author:author,
           year:year
        } 
        library.push(newCollection)
    }

   addTOLibrary("Stay with me","ayobami adebayo", 2017)
   addTOLibrary("Americanah","chimamanda Ngozi", 2013)
   console.log("list after adding new collection",library);

//    function deleteABook( library,title){
//        let index = library.findIndex((library) => library.title === title);
//        if (index !== -1){
//         library.splice(index,1)
//        }
//        return library;
//    }
   
//    console.log("list after deleting a book",deleteABook(library,"The girl with the louding voice"));
        
//    function updateLibraray(){
     
//    }

function deleteABook( ){
    library.pop()
     console.log("student data base after deleting a student",library)
   }
   deleteABook()

   