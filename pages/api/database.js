import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from './config';

export const getIngredient = async (docId) => {
    const ref = doc(firestore, 'ingredients', docId);
    const ingredient = await getDoc(ref);

    return { id: ingredient.id, ...ingredient.data() };
};

export const getCakes = async () => {
    let products = [];
    const response = await getDocs(collection(firestore, 'cakes'));
    
    response.forEach((item) => {
        products.push({ id: item.id, ...item.data() });
    });

    return products;
};

export const getFilters = async () => {
    let filters = [];
    const response = await getDocs(collection(firestore, 'filters'));
    
    response.forEach((item) => {
        filters.push({ id: item.id, ...item.data() });
    });

    return filters;
};

export const getPromos = async () => {
    let promos = [];
    const response = await getDocs(collection(firestore, 'promotions'));
    
    response.forEach((item) => {
        promos.push({ id: item.id, ...item.data() });
    });

    return promos;
};

export const getLocations = async () => {
    let locations = [];
    const response = await getDocs(collection(firestore, 'locations'));
    
    response.forEach((item) => {
        locations.push({ id: item.id, ...item.data() });
    });

    return locations;
};
