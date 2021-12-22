import { getIngredient, getCakes, getFilters, getPromos, getLocations, getContact } from './database';
import { getImage, getImages } from './storage';

export const getProducts = async () => {
    let products = [];
    const data = await getCakes();

    for (const item of data) {
        const imageList = await getImages(`cakes/${item.id}`);

        let ingredientList = []; 
        if (item.ingredients) {
            for (const ingredient of item.ingredients) {
                const temp = await getIngredient(ingredient.id);
                ingredientList.push(temp);
            };
        }

        products.push({ ...item, images: imageList, ingredients: ingredientList });
    };

    // console.log(products);
    return products;
};

export const getProductsByTag = async (tag) => {
    const allProducts = await getProducts();
    return allProducts.filter(item => item.tags.includes(tag));
};

export const getProductsBySize = async (size) => {
    const allProducts = await getProducts();
    return allProducts.filter(item => item.sizes.includes(size));
};

export const getProductsByTagSize = async (tag, size) => {
    const allProducts = await getProducts();
    return allProducts.filter(item => item.tags.includes(tag) && item.sizes.includes(size));
};

export const getFilterByType = async (type) => {
    const allFilters = await getFilters();
    return allFilters.find(item => item.id === type);
};

export const getPromotions = async (mode) => {
    let promotions = [];
    const data = await getPromos();

    for (const item of data) {
        if ((mode === 'active' && !item.active) || (mode === 'inactive' && item.active))
            continue;

        const temp = await getImage(`promotions/${item.id}.jpg`);
        promotions.push({ ...item, banner: temp });
    };

    // console.log(promotions);
    return promotions;
};

export const getLocationsByBrand = async (brand) => {
    const allLocations = await getLocations();
    return allLocations.filter(item => item.id.includes(brand));
};

export const getLocationsByRegion = async (region) => {
    const allLocations = await getLocations();
    return allLocations.filter(item => item.region === region);
};

export const getLocationsByBrandRegion = async (brand, region) => {
    const allLocations = await getLocations();
    return allLocations.filter(item => item.id.includes(brand) && item.region === region);
};

export const getContactInfo = async () => {
    return await getContact()
};