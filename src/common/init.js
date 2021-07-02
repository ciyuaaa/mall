let product = localStorage.product ? JSON.parse(localStorage.product) : product = []
let userAll = localStorage.userData ? JSON.parse(localStorage.userData) : userAll = []
let userIndex = 0
let isLogin = userAll.find((item, index) => {
    if (item.isLogin) {
        userIndex = index
        return true
    } 
    return false  
})
export {userAll, product, isLogin, userIndex}
