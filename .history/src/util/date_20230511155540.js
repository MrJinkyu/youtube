import {format, register } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale);

export function foramtAgo(date, leng='en_US'){
    return format(data,leng);
}