import { getIngredient, getCakes, getPromos, getLocations, getContact } from './database';
import { getImage, getImages } from './storage';

let storedProducts;
export const getProducts = async () => {
    if (storedProducts) 
        return storedProducts;

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

    storedProducts = products;
    return products;
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

        const temp1 = await getImage(`promotions/${item.id}.jpg`);
        const temp2 = await getImage(`promotions/${item.id}-mini.jpg`);
        promotions.push({ ...item, banner: temp1, mini: temp2 });
    };

    storedPromotions = promotions;
    return promotions;
};

export const getLocationsByBrand = async (brand) => {
    const allLocations = await getLocations();
    return allLocations.filter(item => item.id.includes(brand));
};

export const getContactInfo = async () => {
    return await getContact()
};