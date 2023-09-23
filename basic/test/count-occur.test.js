import { expect } from 'chai'
import { countOcurr } from '../src/count-occur'

describe('countOccur()', function () {
  test('should return count of letter in a string', function () {
    const ex = countOcurr('hello', 'l')
    expect(ex).to.be.equal(2)
  })
})
