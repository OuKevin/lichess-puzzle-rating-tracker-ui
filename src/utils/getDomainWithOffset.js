const OFFSET = 25

const getDomainWithOffset = (direction) => (domain) => direction === 'lower' ? domain - OFFSET : domain + OFFSET

export default getDomainWithOffset
