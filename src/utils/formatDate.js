import { format } from 'date-fns';

export default date => console.log(date) || format(new Date(date), 'mm/dd/yyyy')
