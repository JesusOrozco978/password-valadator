const { describe, it } = require('mocha')
const { expect } = require('chai')
const validatePassword = require('./index')

describe('validatePassword', () => {
  it('returns true when the password meets all requirements', () => {
    const valid = validatePassword('P455w0rd!')

    expect(valid).to.equal(true)
  })

  it('returns false when the password is not long enough', () => {
    const valid = validatePassword('P4w0rd!')

    expect(valid).to.equal(false)
  })

  it('returns false when the password is missing a lower case letter', () => {
    const valid = validatePassword('P455W0RD!')

    expect(valid).to.equal(false)
  })

  it('returns false when the password is missing an upper case letter', () => {
    const valid = validatePassword('p455w0rd!')

    expect(valid).to.equal(false)
  })

  it('returns false when the password is missing a numeric value', () => {
    const valid = validatePassword('Password!')

    expect(valid).to.equal(false)
  })

  it('returns false when the password is missing a special character', () => {
    const valid = validatePassword('P455w0rd1')

    expect(valid).to.equal(false)
  })
})
