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

export const Dropdown = ({ content, value, needTranslate=false, onChange }) => {
    return (
        <select value={value ? value : ''} onChange={(e) => onChange(e.target.value)}>
            <option value='na' disabled>{translate('please_select')}</option>
            {content.map(item => (
                <option key={item.value} value={item.value}>{needTranslate ? translate(item.label) : item.label}</option>
            ))}
        </select>
    );
};
