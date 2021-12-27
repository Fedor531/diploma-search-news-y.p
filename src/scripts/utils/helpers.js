// Функция возращает отформатированную дату для карточек
export function createTimeFormat(date) {
    const year = date.substr(0, 4)
    let mounth = date.substr(5, 2)
    let day = date.substr(8, 2)

    if (day.startsWith('0')) {
        day = date.substr(9, 1)
    }

    switch (mounth) {
        case '1':
            mounth = 'января'
            break;
        case '2':
            mounth = 'февраля'
            break
        case '3':
            mounth = 'мара'
            break
        case '4':
            mounth = 'апреля'
            break
        case '5':
            mounth = 'мая'
            break
        case '6':
            mounth = 'июня'
            break
        case '7':
            mounth = 'июля'
            break
        case '8':
            mounth = 'августа'
            break
        case '9':
            mounth = 'сентября'
            break
        case '10':
            mounth = 'октября'
            break
        case '11':
            mounth = 'ноября'
            break
        case '12':
            mounth = 'декабря'
            break
    }

    return `${ day } ${ mounth }, ${ year }`
}
