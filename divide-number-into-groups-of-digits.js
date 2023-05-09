//first version
const getFormatNum = (stringNum, separator = ' ') =>
  stringNum.replace(/^-?\d+(?=\.|\b)/, (match) =>
    match.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  )

//second version, should be faster on small numbers
const getFormatNum2 = (stringNum, separator = ' ') => {
  const completeDecimal = stringNum.endsWith('.') ? '.' : ''
  const [int, decimal = ''] = stringNum.split('.', 2)
  const formatInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  return `${formatInt}${decimal ? `.${decimal}` : ''}${completeDecimal}`
}