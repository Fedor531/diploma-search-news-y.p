// Функция возвращает отформатированную дату для карточек
export function createTimeFormat(date) {
    const year = date.substr(0, 4)
    let month = date.substr(5, 2)
    let day = date.substr(8, 2)

    if (day.startsWith('0')) {
        day = date.substr(9, 1)
    }

    switch (month) {
        case '1':
            month = 'января'
            break;
        case '2':
            month = 'февраля'
            break
        case '3':
            month = 'марта'
            break
        case '4':
            month = 'апреля'
            break
        case '5':
            month = 'мая'
            break
        case '6':
            month = 'июня'
            break
        case '7':
            month = 'июля'
            break
        case '8':
            month = 'августа'
            break
        case '9':
            month = 'сентября'
            break
        case '10':
            month = 'октября'
            break
        case '11':
            month = 'ноября'
            break
        case '12':
            month = 'декабря'
            break
    }

    return `${ day } ${ month }, ${ year }`
}
