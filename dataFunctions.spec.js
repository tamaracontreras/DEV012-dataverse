import { example, anotherExample } from '../src/dataFunctions.js';
//traigo las funciones desde el archivo 
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
    //ejecuto la funcion(.toBe)"deber ser"
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
