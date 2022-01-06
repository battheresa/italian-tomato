export const formatOpening = (index, value) => {
    const section = value.split('-');
    
    if (index === 0) 
        return section[0] + ' – ' + section[1];
    else 
        return section[0].slice(0, 2) + ':' + section[0].slice(2, section[0].length) + ' – ' + section[1].slice(0, 2) + ':' + section[1].slice(2, section[0].length);
};
