export function sortProductsByPrice(products= [], filter) {
    if(filter==='All'){
        return [...products]
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
        if(value===undefined){
            return [...products];
        }else{
            return product.category === value
        }
    })
}