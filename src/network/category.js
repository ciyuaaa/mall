import {request} from './fetch'

export const category = request('/category').then((data) => data.data)
export const getSubCategory = (maitKey) => {
    return request(`/subcategory?maitKey=${maitKey}`).then((data) => {
        return data.data
    })
}
export const getSubCategoryDetail = (miniWallkey, type) => {
    return request(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`).then((data) => {
        return data
    })
}
// http://152.136.185.210:7878/api/m5/subcategory?maitKey=3627
// http://152.136.185.210:7878/api/m5/subcategory/detail?miniWallkey=10062603