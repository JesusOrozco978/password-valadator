// Must be a minimum of 8 characters
// * Must contain at least one lower case letter
// * Must contain at least one upper case letter
// * Must contain at least one numeric value
// * Must contain at least one special character
const validatePassword = (valid) => {
  if (valid.length < 8) return false
  let passArray = valid.split('')


  let checkNum = false
  let hasSpecial = false
  let hasUpper = false
  let hasLower = false




  for (let index = 0; index < passArray.length; index++) {
    const passWord = passArray[index]

    if (checkNumber(passWord)) {
      checkNum = true
      continue
    }
    if (checkSpecial(passWord)) {
      hasSpecial = true
      continue
    }
    if (checkLowerCase(passWord)) {
      hasLower = true
      continue
    }
    if (checkUpperCase(passWord)) {
      hasUpper = true
      continue
    }
  }

  return checkNum && hasSpecial && hasLower && hasUpper
}


const checkNumber = (valid) => {
  const numberCheck = Number(valid)

  return !isNaN(numberCheck)
}

const checkUpperCase = (valid) => {
  if (checkNumber(valid)) return false

  return valid.toUpperCase() === valid
}

const checkLowerCase = (valid) => {
  if (checkNumber(valid)) return false

  return valid.toLowerCase() === valid
}

const checkSpecial = (valid) => {
  const char = '~`!#$%^&*+=-[]\\\';,/{}|":<>?'

  for (let index = 0; index < char.length; index++) {
    const character = char[index]

    if (character === valid) return true
  }

  return false
}

module.exports = validatePassword
