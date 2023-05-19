import { formatDistanceToNow } from 'date-fns';
export function formatToDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
