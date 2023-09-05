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
  return localDate
}

export const eventTimeCalendarFormat = (date) => {
  const utcDate = new Date(date)
  const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset())
  // return new Date(
  //   localDate.getFullYear(),
  //   localDate.getMonth()+1,
  //   localDate.getDay(),
  //   localDate.getHours(),
  //   localDate.getMinutes(),
  //   localDate.getSeconds() + 1
  // )
  return localDate
}
