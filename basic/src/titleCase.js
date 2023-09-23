export const titleCase = (str) => {
  if (!str) throw new Error('No arg passed')
  if (str && typeof str !== 'string')
    throw new Error('tileCase() only excepts a string as an argument')

  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}
