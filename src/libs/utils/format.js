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
  const localDate = new Date(date).toISOString()
  console.log(localDate)
  return localDate
}

export const eventTimeCalendarFormat = (date) => {
  const newData = new Date(date)
  return new Date(
    newData.getFullYear(),
    newData.getMonth() + 1,
    newData.getDay(),
    newData.getHours(),
    newData.getMinutes()
  )
}
