import { Monitor, Calendar, CreditCard, ShoppingBag } from 'react-feather';

import { translate } from '../../resources/Translations';
import styles from '../../styles/components/subcomponents/StepCard.module.css';

function StepCard({ stepNumber }) {
    const iconSize = 52;
    const strokeWidth = '0.08em'
    
    return (
        <div className={styles.container}>
            {stepNumber === 1 && <div><Monitor width={iconSize} height={iconSize} strokeWidth={strokeWidth} /></div>}
            {stepNumber === 2 && <div><Calendar width={iconSize} height={iconSize} strokeWidth={strokeWidth} /></div>}
            {stepNumber === 3 && <div><CreditCard width={iconSize} height={iconSize} strokeWidth={strokeWidth} /></div>}
            {stepNumber === 4 && <div><ShoppingBag width={iconSize} height={iconSize} strokeWidth={strokeWidth} /></div>}

            <h2>{translate(`step_title_${stepNumber}`)}</h2>
            <h6 hoverable='false'>{translate(`step_description_${stepNumber}`)}</h6>
        </div>
    )
}

export default StepCard;
