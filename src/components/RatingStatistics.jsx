import maxBy from 'lodash/maxBy'
import meanBy from 'lodash/meanBy'
import minBy from 'lodash/minBy'
import round from 'lodash/round'

const RatingStatistics = ({data}) => (
<>
  <h5>{`Number of Days Recorded: ${data.length}`}</h5>
  <h5>{`Max Rating: ${maxBy(data, 'rating').rating}`}</h5>
  <h5>{`Average Rating: ${round(meanBy(data, 'rating'), 2)}`}</h5>
  <h5>{`Lowest Rating: ${minBy(data, 'rating').rating}`}</h5>
</>
)

export default RatingStatistics
