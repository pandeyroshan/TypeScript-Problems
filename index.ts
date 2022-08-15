// GENERIC -----------------

const makeFullName = (obj: {firstname: string, lastname: string}) => {
    return {
        ...obj,
        fullname: obj.firstname + " " + obj.lastname
    }
}

console.log(makeFullName({firstname: "roshan", lastname: 'pandey'}))

// but the above implementation limits to have only firstname and lastname to be present in the object that is passed
// below is a better implementations

const makeFullNameModified = <T extends {firstname: string, lastname: string}>(obj: T) => {
    return {
        ...obj,
        fullname: obj.firstname + " " + obj.lastname
    }
}

console.log(makeFullNameModified({firstname: 'Roshan', lastname: 'Pandey', age: 22}))

// INTERFACES ---------------

interface Tab<T> {
    id: number
    position: number
    data: T
};

type numberTab = Tab<number>
type stringTab = Tab<string>


// Utitlity Types

// 1. Partial<Type>

interface User {
    id: number
    name: string
}

function updateUser(user: User, updatedUser: Partial<User>) {
    return {...user, ...updatedUser};
}

const user: User = {
    id: 1,
    name: 'Roshan'
}

console.log(updateUser(user, {'name': 'Roshan Pandey'}))

// 2. Required<Type>

interface Book {
    isbn?: number
    name: string
    price?: number
}

const book1: Book = {
    isbn: 1,
    name: 'Think like a Monk',
    price: 250
}

function updateAllInformationOfBook(book: Book, updatedBookInfo: Required<Book>) {
    return {...book, ...updatedBookInfo};
}

console.log(updateAllInformationOfBook(book1, {
    isbn: 2,
    name: 'Think like a MONK',
    price: 300
}))

// 3. Readonly<Type> 


// Object.freeze()

var person = {
    firstname: 'Roshan',
    lastname: 'Pandey'
}

Object.preventExtensions(person);

var newPerson = {...person, ...{fullname: person.firstname + " " + person.lastname}}

console.log(newPerson.fullname);


console.log("Utitlity Types in TS")