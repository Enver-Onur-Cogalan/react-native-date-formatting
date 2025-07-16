import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { formatDate } from '../utils/format'
import { formatInTZ } from '../utils/tz'
import { LiveClock } from '../components/LiveClock'
import { LiveTZClock } from '../components/LiveTZClock'
import { TimeAgo } from '../components/TimeAgo'
import { AddSubtractExample } from '../components/AddSubtract'

export default function DemoScreen() {
    const orderUTC = '2025-07-15T10:00:00Z'
    const baseDate = new Date()

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>📦 Order Summary</Text>

            {/* 1. Simple format */}
            <Text>Local: {formatDate(orderUTC)}</Text>

            {/* 2. Multiple Time Zones */}
            <Text>New York: {formatInTZ(orderUTC, 'America/New_York')}</Text>
            <Text>Tokyo:    {formatInTZ(orderUTC, 'Asia/Tokyo')}</Text>

            {/* 3. Relative time */}
            <Text style={styles.section}>⏱  Relative Time:</Text>
            <TimeAgo date={orderUTC} />

            {/* 4. Add/Subtract */}
            <Text style={styles.section}>📅  +/- Date:</Text>
            <AddSubtractExample base={baseDate} />

            {/* 5. Live Clocks */}
            <Text style={styles.section}>🕒  Live Clock:</Text>
            <Text>Local:</Text><LiveClock />
            <Text>Istanbul:</Text><LiveTZClock tz="Europe/Istanbul" />
            <Text>New York:</Text><LiveTZClock tz="America/New_York" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, gap: 8, padding: 16, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
    h1: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
    section: { marginTop: 12, fontWeight: '600' }
})
