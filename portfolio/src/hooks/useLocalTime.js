import { useEffect, useState } from 'react'

function formatTime(timeZone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZoneName: 'short',
  }).formatToParts(new Date())

  const get = (type) => parts.find((part) => part.type === type)?.value
  return `${get('hour')}:${get('minute')} ${get('timeZoneName')}`
}

/** Returns the current time in `timeZone` as "HH:MM TZ", kept up to date. */
export default function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 15_000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}
