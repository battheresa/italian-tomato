import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './config';

export const getImage = async (filename) => {
    try {
        const path = ref(storage, `${filename}`);
        const url = await getDownloadURL(path);
    
        return url;
    }
    catch (error) {
        const path = ref(storage, `error/banner-loading.jpg`);
        const url = await getDownloadURL(path);

        return url;
    }
};

export const getImages = async (folder) => {
    let urlList = [];
    const path = ref(storage, `${folder}`);

    await listAll(path).then(async (response) => {
        for (const item of response.items) {
            const url = await getImage(item.fullPath);
            urlList.push(url);
        }
    });

    return urlList;
};
