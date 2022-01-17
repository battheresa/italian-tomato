import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from './config';

export const getIngredient = async (docId) => {
    const ref = doc(firestore, 'ingredients', docId);
    const ingredient = await getDoc(ref);

    return { id: ingredient.id, ...ingredient.data() };
};

let storedCakes;
export const getCakes = async () => {
    if (storedCakes)
        return storedCakes;

    let cakes = [];
    const response = await getDocs(collection(firestore, 'cakes'));
    
    response.forEach((item) => {
        cakes.push({ id: item.id, ...item.data() });
    });

    storedCakes = cakes;
    return cakes;
};

let storedPromos;
export const getPromos = async () => {
    if (storedPromos)
        return storedPromos;

    let promos = [];
    const response = await getDocs(collection(firestore, 'promotions'));
    
    response.forEach((item) => {
        promos.push({ id: item.id, ...item.data() });
    });

    storedPromos = promos;
    return promos;
};

let storedLocations;
export const getLocations = async () => {
    if (storedLocations)
        return storedLocations;

    let locations = [];
    const response = await getDocs(collection(firestore, 'locations'));
    
    response.forEach((item) => {
        locations.push({ id: item.id, ...item.data() });
    });

    storedLocations = locations;
    return locations;
};

let storedContacts;
export const getContact = async () => {
    if (storedContacts)
        return storedContacts;

    let contacts = [];
    const response = await getDocs(collection(firestore, 'contact'));
    
    response.forEach((item) => {
        contacts.push({ id: item.id, ...item.data() });
    });

    storedContacts = contacts;
    return contacts;
};

let storeCoupons;
export const getCoupons = async () => {
    if (storeCoupons)
        return storeCoupons;

    let coupons = [];
    const response = await getDocs(collection(firestore, 'coupons'));
    
    response.forEach((item) => {
        coupons.push({ id: item.id, ...item.data() });
    });

    storeCoupons = coupons;
    return coupons;
};