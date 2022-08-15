// SET type

type children = 'Roshan' | 'Monika' | 'Kishan'

const childrenName: children = 'Monika' // if you assign anything other than Monika/Roshan/Kishan then it will raise error.
console.log(childrenName)

// Never - used as a return type of a function that never returns anything

const throwError = (): never => {
    throw new Error('Something went wrong')
};