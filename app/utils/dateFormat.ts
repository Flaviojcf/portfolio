import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const DateFormat = (startDate: Date) => {
  return format(startDate, 'MMM yyyy', { locale: ptBR })
}
