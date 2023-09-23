import { should, expect } from 'chai'
import { titleCase } from '../src/titleCase'

describe('titlleCase()', () => {
  it('takes an argument of string and returns a title case', () => {
    const ex = titleCase('let')
    expect(ex).to.be.string('Let')
  })
  test('throws error when no argument is passed', () => {
    const fn = () => titleCase()
    expect(fn).to.throw(Error, 'No arg passed')
  })
  it('should throw error when arg is not a string', () => {
    const ex = () => titleCase(234324)
    expect(ex).to.throw(
      Error,
      'tileCase() only excepts a string as an argument'
    )
  })
})
