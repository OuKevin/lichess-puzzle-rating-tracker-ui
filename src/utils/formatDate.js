import { format } from 'date-fns';

const formatDate = date => format(new Date(date), 'MM/dd/yyyy')

export default formatDate
