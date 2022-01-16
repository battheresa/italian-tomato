import { v4 as uuidv4 } from 'uuid';

export const generateUUID = () => {
    return uuidv4().split('-')[0]
};

export const generateOrderNumber = () => {
    return uuidv4().split('-')[0].toUpperCase();
};

export const formatOpening = (index, value) => {
    const section = value.split('-');
    
    if (index === 0) 
        return section[0] + ' – ' + section[1];
    else 
        return section[0].slice(0, 2) + ':' + section[0].slice(2, section[0].length) + ' – ' + section[1].slice(0, 2) + ':' + section[1].slice(2, section[0].length);
};

export const formatCurrency = (value) => {
    return value.toLocaleString();
};

export const formatPhone = (prev, cur) => {
    if (cur[cur.length - 1] === ' ')
        return cur.slice(0, cur.length - 1)

    if (prev.length > cur.length)
        return cur
    
    if (cur.length < 4)
        return cur

    if (cur.length > 9)
        return cur.slice(0, 9)

    if (cur[4] === ' ')
        return cur

    return cur.slice(0, 4) + ' ' + cur.slice(4);
};

export const formatCreditCard = (section, prev, cur) => {
    switch (section) {
        case 'number':
            if (prev.length > cur.length && prev[prev.length - 1] === '-')
                return prev.slice(0, prev.length - 2)

            if (cur[cur.length - 1] === '-')
                return cur.slice(0, cur.length - 1)
            
            if (prev.length > cur.length)
                return cur

            if (cur.length > 19)
                return cur.slice(0, 19)

            const indexes = [4, 9, 14]

            for (let i = 0; i < indexes.length; i++) {
                if (cur.length < indexes[i])
                    return cur

                if (cur[indexes[i]] === '-')
                    continue
                
                cur = cur.slice(0, indexes[i]) + '-' + cur.slice(indexes[i]);
            }

            return cur;

        case 'exp':
            if (prev.length > cur.length && prev[prev.length - 1] === '/')
                return prev.slice(0, prev.length - 2)

            if (cur[cur.length - 1] === '/')
                return cur.slice(0, cur.length - 1)

            if (prev.length > cur.length)
                return cur

            if (cur.length < 2)
                return cur

            if (cur.length === 2 && (parseInt(cur) <= 0 || parseInt(cur) > 12))
                return cur.slice(0, cur.length - 1)

            if (cur.length > 5)
                return cur.slice(0, 5)
            
            if (cur[2] === '/')
                return cur

            return cur.slice(0, 2) + '/' + cur.slice(2);
    }
};