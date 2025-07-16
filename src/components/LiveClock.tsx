import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { format } from 'date-fns'

export function LiveClock({ pattern = 'HH:mm:ss' }: { pattern?: string }) {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    return <Text>{format(now, pattern)}</Text>
}
