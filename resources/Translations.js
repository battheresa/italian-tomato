import { useIntl } from 'react-intl';

export const translate = (id) => {
    const { formatMessage } = useIntl();
    return formatMessage({ id }) || '';
};