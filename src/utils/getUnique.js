const getUnique = (items, value) => {
    return [...new Set(items?.map(item => item[value]))]
};

const getCategories = (items, value) =>{
  let categories =   items.reduce((r , a) => {
        r[a[value]] = [...r[a[value]] || [], a]
        return r
    }, {})
    return categories
}

export {getUnique, getCategories}