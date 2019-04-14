const OFFSET = 25
export default (direction) => (domain) => direction === 'lower' ? domain - OFFSET : domain + OFFSET
