import zeroPadding from './zeroPadding'

const getDateTime = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = zeroPadding(d.getMonth() + 1, 2)
  const date = zeroPadding(d.getDate(), 2)
  const hour = zeroPadding(d.getHours(), 2)
  const minutes = zeroPadding(d.getMinutes(), 2)
  const seconds = zeroPadding(d.getSeconds(), 2)

  return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`
}

export default getDateTime