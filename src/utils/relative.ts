import { formatDistanceToNow } from "date-fns";
import { tr } from 'date-fns/locale'

export const timeAgo = (date: Date | string | number) =>
    formatDistanceToNow(new Date(date), { addSuffix: true, locale: tr })