import React from 'react'
import { Text } from 'react-native'
import { formatDistanceToNow } from 'date-fns'
import { tr } from 'date-fns/locale'

export function TimeAgo({ date }: { date: string | number | Date }) {
    return (
        <Text>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: tr })}</Text>
    )
}
