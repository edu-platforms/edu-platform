export const format = (option, dateString) => {
  const options =
    option === 'year'
      ? { year: 'numeric', month: 'numeric', day: 'numeric' }
      : {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export const eventFormatLocalTime = (date) => {
  const realDate = new Date(date)
  const localDate = new Date(realDate).toISOString()
  return localDate
}
