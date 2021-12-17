import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { useMousedownTarget } from '../utilities/customHooks';

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

export const Dropdown = ({ content, value, placeholder, searchable=true, disabled=false, onChange }) => {
    const target = useMousedownTarget('grandparent');
    const [ keyword, setKeyword ] = useState('');
    const [ open, setOpen ] = useState(false);
    const [ list, setList ] = useState([ ...content ]);

    useEffect(() => {
        setList(content.filter(item => item.label.toLowerCase().includes(keyword.toLowerCase())));
    }, [keyword]);

    useEffect(() => {
        if (target && target.className !== 'dropdown') 
            toggleOption(false); 
    }, [target]);

    const toggleOption = (action) => {
        setKeyword(value.label !== '' ? value.label : keyword);
        setList([ ...content ]);
        setOpen(action);
    };

    const selectOption = (item) => {
        setKeyword(item.label);
        setOpen(false);
        onChange(item);
    };

    return (
        <div className='dropdown' clickable={disabled ? 'off' : ''}>
            <div className='button' onClick={() => disabled ? undefined : toggleOption(!open)}>
                <input type='text' value={keyword} placeholder={placeholder} readOnly={!searchable} onChange={(e) => setKeyword(e.target.value)} />
                <span><ChevronDown /></span>
            </div>
            <div className='option' status={open ? '' : 'close'}>
                {list.map(item => (
                    <p key={item.value} value={item.value} onClick={() => selectOption(item)}>{item.label}</p>
                ))}
                {list.length === 0 && <p>No keyword found.</p>}
            </div>
        </div>
    );
};
