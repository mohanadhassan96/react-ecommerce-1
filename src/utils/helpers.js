//function for viewing prices in usd syntax 
//copy paste no need to under stand 
export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) =>  item[type] ).flat()
    const x =['all',...new Set(unique)]
return x
}
