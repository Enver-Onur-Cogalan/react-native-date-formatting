import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { formatInTimeZone } from 'date-fns-tz'

interface Props {
    tz: string               // Like 'Europe/Istanbul'
    pattern?: string         // default 'HH:mm:ss'
}

export function LiveTZClock({ tz, pattern = 'HH:mm:ss' }: Props) {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    return <Text>{formatInTimeZone(now, tz, pattern)}</Text>
}
