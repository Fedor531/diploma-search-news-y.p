export function createTimeFormat(date) {
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }

    const locale = 'ru-RU';

    return new Intl.DateTimeFormat(locale, options).format(new Date(date))
}
