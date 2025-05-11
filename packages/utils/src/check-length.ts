export function checkLength({inputStr}: {inputStr: string}): boolean {

  if(inputStr.length > 100) {
    throw new Error('Length is more than 100')
  }

  return true
}

