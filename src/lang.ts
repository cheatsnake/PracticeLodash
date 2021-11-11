import _, { isArray } from 'lodash'; //need for tests

//castArray
function castArray(value?: any): any[] {
    return arguments.length ? (Array.isArray(value) ? value : [value]) : []; 
}

// console.log(castArray({ 'a': 1 }))
// console.log(_.castArray({ 'a': 1 }))
// console.log(castArray())
// console.log(_.castArray())

//clone
const clone = (value: any): any => value;

// const objects = [{ 'a': 1 }, { 'b': 2 }]
// const test1 = clone(objects)
// const test2 = _.clone(objects)
// console.log(test1[0] === objects[0])
// console.log(test2[0] === objects[0])

//gt
const gt = (value: number, other: number): boolean =>
    value > other ? true : false;

// console.log(gt(3, 3))
// console.log(_.gt(3, 3))
// console.log(gt(3, 2))
// console.log(_.gt(3, 2))

//gte
const gte = (value: number, other: number): boolean =>
    value >= other ? true : false;

// console.log(gte(3, 4))
// console.log(_.gte(3, 4))
// console.log(gte(3, 3))
// console.log(_.gte(3, 3))