import Button from '@material-ui/core/Button';
import './DateRange.css';

const values = [{
  label: '1W',
  value: 7,
}, {
  label: '1M',
  value: 30,
}, {
  label: '3M',
  value: 90,
}, {
  label: '6M',
  value: 180,
}, {
  label: '1Y',
  value: 365,
}, {
  label: 'All',
  value: 0,
}];

const DateRangeSelection = ({ numberOfDaysDisplayed, setNumberOfDaysDisplayed }) => (
<div className="date-range-selection">
  {values.map(({ label, value }) =>
    <Button
      color="primary"
      onClick={() => setNumberOfDaysDisplayed(value)}
      key={label}
      variant={numberOfDaysDisplayed === value ? "contained": "outlined"}
    >
      {label}
    </Button>
  )}
</div>
);

export default DateRangeSelection;
