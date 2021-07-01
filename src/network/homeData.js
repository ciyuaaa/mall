import {request} from './fetch'
export const HomeMultidata = request('/home/multidata')
                        .then(dat =>  dat.data)
export const HomeData = (type, page) => {
    return request(`/home/data?type=${type}&page=${page}`)
                        .then(dat =>  dat.data)
}