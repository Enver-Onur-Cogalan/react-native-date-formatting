import React from 'react'
import { Text } from 'react-native'
import { addDays, subHours, format } from 'date-fns'

export function AddSubtractExample({
    base,
    days = 3,
    hours = 5
}: {
    base: Date
    days?: number
    hours?: number
}) {
    const in3Days = addDays(base, days)
    const minus5h = subHours(base, hours)
    return (
        <>
            <Text>+{days} day:  {format(in3Days, 'dd/MM/yyyy HH:mm')}</Text>
            <Text>-{hours} hour: {format(minus5h, 'dd/MM/yyyy HH:mm')}</Text>
        </>
    )
}
