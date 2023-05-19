import { formatDistanceToNow, format } from 'date-fns';
export function formatToDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatToPpDate(date) {
  return format(new Date(date), 'Pp', { addSuffix: true });
}
