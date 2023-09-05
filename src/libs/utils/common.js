const PREFIX = '/'

export const getPrefix = (name, action) => {
  return `${name}${PREFIX}${action}`
}
