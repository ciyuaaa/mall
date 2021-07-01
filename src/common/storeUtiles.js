function add(product, prod) {
    function isAdd(product, prod) {
        if (!product.length) {
        product.push(prod)
        } else {
        product.find((item) => {
            console.log(item.stock, prod.stock)
            if (item.stock === prod.stock) {
            item.count++
            return  true
            } else {
            product.push(prod)
            return true
            }
        })
        }
    }

    if (Array.isArray(prod)) {
        prod.forEach((item) => {
        isAdd(product, item)
        })
    } else {
        isAdd(product, prod)
    }
}

export default {
    add,
}