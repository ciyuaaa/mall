import {request} from "./fetch"
export const detilesData = (id) => {
    return request("/detail?iid="+id)
}

export class BaseInfo {
    constructor(itemInfo, columns,services) {
        let props = [
            'title', 
            'desc',
            'price', 
            'oldPrice', 
            'discountDesc', 
            'discountBgColor', 
            'lowNowPrice', 
        ]
        props.forEach((item, index) => {
            this[item] = itemInfo[item]
        })
        this.columns = columns
        this.services = services.filter((item) => {
            if (item.hasOwnProperty('icon')) {
                return true
            } else {
                this.columns.push(item.name)
            }
        })
        
    }
}

export class Shop {
    constructor(shopInfo) {
        let props = [
            'name',
            'shopLogo',
            'score',
            'cSells',
            'cGoods',
            'cFans',
        ]
        props.forEach((item, index) => {
            this[item] = shopInfo[item]
        })
    }
}

export class ItemParams {
    constructor(itemParams) {
        this.set = itemParams.info.set;
        this.tables = itemParams.rule.tables[0]
    }
}

export function getRecommend() {
    let page = Math.floor(Math.random()*15+1)
    return request(`/home/data?type=sell&page=${page}`)
} 