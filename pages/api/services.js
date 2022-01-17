import { getIngredient, getCakes, getPromos, getLocations, getContact, getCoupons } from './database';

let storedProducts;
export const getProducts = async () => {
    if (storedProducts) 
        return storedProducts;

    let products = [];
    const data = await getCakes();

    for (const item of data) {
        let ingredientList = []; 
        if (item.ingredients) {
            for (const ingredient of item.ingredients) {
                const temp = await getIngredient(ingredient.id);
                ingredientList.push(temp);
            };
        }

        products.push({ ...item, ingredients: ingredientList });
    }

    storedProducts = products;
    return products;
};

let storedIds;
export const getProductIds = async () => {
    if (storedIds)
        return storedIds;

    let ids = [];
    const data = await getCakes();

    data.forEach((item) => {
        ids.push({ id: item.id });
    });

    storedIds = ids;
    return ids;
};

export const getProductById = async (id) => {
    const allProducts = await getProducts();
    return allProducts.find(item => item.id === id);
};

export const getProductsByTag = async (tag) => {
    const allProducts = await getProducts();
    return allProducts.filter(item => item.tags.includes(tag));
};

let storedPromotions;
export const getPromotions = async (mode) => {
    if (storedPromotions)
        return storedPromotions;

    let promotions = [];
    const data = await getPromos();

    for (const item of data) {
        if ((mode === 'active' && !item.active) || (mode === 'inactive' && item.active))
            continue;

        promotions.push({ ...item });
    };

    storedPromotions = promotions;
    return promotions;
};

export const getLocationsByBrand = async (brand) => {
    const allLocations = await getLocations();
    return allLocations.filter(item => item.id.includes(brand));
};

let storePickupLocations;
export const getPickupLocations = async (brand) => {
    if (storePickupLocations) 
        return storePickupLocations
    
    let en = []
    let zh = []

    const allLocations = await getLocationsByBrand(brand);

    allLocations.forEach(item => {
        en.push({ value: item.id, label: item.name })
        zh.push({ value: item.id, label: item.name_zh })
    });

    storePickupLocations = { en: en, zh: zh }
    return { en: en, zh: zh };
};

export const getContactInfo = async () => {
    return await getContact();
};

export const getDiscountCodes = async () => {
    return await getCoupons();
};