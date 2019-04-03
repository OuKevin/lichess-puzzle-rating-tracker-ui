import dateFns from 'date-fns';

export default date => dateFns.format(new Date(date), 'MM/DD/YYYY')
