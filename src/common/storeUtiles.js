function add(product, prod) {

    function isAdd(product, prod) {
        if (!product.length) {
            product.push(Object.assign({}, prod))
        } else {
           let isHas = product.find((item) => {
                return item.stock === prod.stock
            })
            isHas ? isHas.count++ : product.push(Object.assign({}, prod))
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

function less(product, prod) {
    if (product.length === 1) {
        product.pop()
    } else {
        product.find((item, index) => {
            if (item.stock === prod.stock) {
                index ? product.splice(index, index) :
                        product.splice(index, index + 1)
                return  true
            }
        })
    }
}
export default {
    add, less
}