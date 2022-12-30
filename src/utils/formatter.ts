import { formatDistanceToNow } from "date-fns";
import eoLocale from "date-fns/locale/pt-BR";

export function relativeDateFormatter(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: eoLocale,
  });
}
