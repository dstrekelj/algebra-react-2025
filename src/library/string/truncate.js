export function truncate(value, limit, symbol) {
    if (typeof value !== 'string') {
        return value;
    }

    if (value.length <= limit) {
        return value;
    }

    return value.substring(0, limit) + symbol;
}