export function sortProducts(products= [], filter) {
    if(filter==='All'){
        return [...products]
    }
    else if (filter === 'latest'){
        return [...products].sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
    }
    else if (filter === 'oldest'){
        return [...products].sort((a, b) => new Date(a.createDate) - new Date(b.createDate))
    }
    else if(filter === 'highest-price'){
        return [...products].sort((a,b) => b.cost - a.cost)
    }
    else if(filter === 'lowest-price'){
        return [...products].sort((a,b) => a.cost - b.cost)
    }
    else {
        return []
    }
}

export function sortProductsByCategory (products = [],value) {
    return products.filter ((product)=>{
            return product.category === value
    })
}