import { queryString, parse } from './queryString'

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Antonio',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe('name=Antonio&profession=developer')
  })

  it('should create a valid query string even whan an array is passed as value', () => {
    const obj = {
      name: 'Antonio',
      abilities: ['JS', 'TDD']
    }

    expect(queryString(obj)).toBe('name=Antonio&abilities=JS,TDD')
  })

  it('should throw an error when object is passed as value', () => {
    const obj = {
      name: 'Antonio',
      abilities: {
        first: 'JS',
        second: 'TDD'
      }
    }

    expect(() => {
      queryString(obj)
    }).toThrowError()
  })
})

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Antonio&profession=developer'

    expect(parse(qs)).toEqual({
      name: 'Antonio',
      profession: 'developer'
    })
  })

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Antonio'

    expect(parse(qs)).toEqual({
      name: 'Antonio'
    })
  })

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Antonio&abilities=JS,TDD'

    expect(parse(qs)).toEqual({
      name: 'Antonio',
      abilities: ['JS', 'TDD']
    })
  })
})
