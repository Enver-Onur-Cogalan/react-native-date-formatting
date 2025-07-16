import { formatInTimeZone } from "date-fns-tz";

export const formatInTZ = (
    isoUTC: string,
    tz: string = 'Europe/Istanbul',
    pattern = "yyyy-MM-dd HH:mm '('zzz')'"
) => formatInTimeZone(isoUTC, tz, pattern)

// Example
formatInTZ('2025-12-31T21:00:00Z', 'America/New_York')
// 2025-12-31 16:00 (EST)