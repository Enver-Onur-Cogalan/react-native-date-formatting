import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

/**
 * Takes ISO / epoch / Date and returns a string according to the specified pattern.
 * @example formatDate('2025-07-16T10:32:00Z', 'dd/MM/yyyy HH:mm')
 */

export const formatDate = (
    date: string | number | Date,
    pattern = 'dd/MM/yyyy HH:mm'
) => format(typeof date === 'string' ? parseISO(date) : new Date(date), pattern)

/** Formatting with locale */
export const formatLocale = (
    date: Date | string,
    locale: 'tr' | 'en' | 'es' = 'tr'
) => {
    const map = { tr, en: enUS, es }
    return format(new Date(date), "PPP 'hour' p", { locale: map[locale] })
}