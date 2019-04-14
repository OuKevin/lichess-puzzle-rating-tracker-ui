import getDomainWithOffset from './getDomainWithOffset'

describe('getDomainWithOffset', () => {
  it('adjusts lower range with offset of 25', () => {
    const expected = 1632
    const actual = getDomainWithOffset('lower')(1657)

    expect(actual).toEqual(expected);
  })
  it('adjusts upper range with offset of 25', () => {
    const expected = 1725
    const actual = getDomainWithOffset('upper')(1700)

    expect(actual).toEqual(expected);
  })
})
