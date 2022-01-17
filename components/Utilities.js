import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { useMousedownTarget } from '../utilities/customHooks';

import { translate } from '../translations/Translations';

export const Checkbox = ({ label, checked, onChange }) => (
    <label className='checkbox'>
        <input type='checkbox' checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <span className='checkmark' />
        {label}
    </label>
);

export const Radio = ({ label, value, name, checked, onChange }) => (
    <label className='radio'>
        <input type='radio' value={value} name={name} checked={checked === value} onChange={(e) => onChange(e.target.value)} />
        <span className='radiomark' />
        {label}
    </label>
);

export const Dropdown = ({ content, value, placeholder, searchable=true, disabled=false, needTranslate=false, mode, onChange }) => {
    const target = useMousedownTarget('grandparent');
    const [ keyword, setKeyword ] = useState('');
    const [ open, setOpen ] = useState(false);
    const [ list, setList ] = useState([ ...content ]);

    useEffect(() => {
        if (keyword.length > 0 && searchable)
            setList(content.filter(item => item.label.toLowerCase().includes(keyword.toLowerCase())));
    }, [content, keyword, searchable]);

    useEffect(() => {
        if (target && target.className !== 'dropdown') 
            toggleOption(false); 
    }, [target, toggleOption]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleOption = (action) => {
        setKeyword(value.label || keyword);
        setList([ ...content ]);
        setOpen(action);
    };
    
    const selectOption = (item) => {
        setKeyword(item.label || '');
        setOpen(false);
        onChange(item);
    };

    return (
        <div className='dropdown' clickable={disabled ? 'off' : ''} mode={mode}>
            <div className='button' onClick={() => disabled ? undefined : toggleOption(!open)}>
                <input 
                    type='text' 
                    value={searchable ? keyword : (needTranslate ? translate(value.label) : value.label)} 
                    placeholder={placeholder ? needTranslate ? translate(placeholder) : placeholder : ''} 
                    readOnly={!searchable} 
                    onChange={(e) => setKeyword(e.target.value)} 
                />
                <span><ChevronDown /></span>
            </div>
            <div className='option' status={open ? '' : 'close'}>
                {list.map(item => (
                    <p key={item.value} value={item.value} onClick={() => selectOption(item)}>{needTranslate ? translate(item.label) : item.label}</p>
                ))}
                {list.length === 0 && <p>No keyword found.</p>}
            </div>
        </div>
    );
};
