const { queryString } = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Antonio',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe('name=Antonio&profession=developer')
  })
})

// describe('Query string to object', () => {

// })
