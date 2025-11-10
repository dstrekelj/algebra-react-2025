export function convertLineBreaks(value) {
    if (typeof value !== 'string') {
        return value;
    }

    return value.replace('\n', '<br/>');
}