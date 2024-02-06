
import { FC, ReactElement } from "react";
import { clsx } from 'clsx';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CallIcon from '@mui/icons-material/Call';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PersonIcon from '@mui/icons-material/Person';

import styles from "./ActivityIcon.module.css";

interface IActivityIconProps {
    type: string,
    hover?: boolean,
}

enum iActivityTypeEnum {
    Text = 'text',
    Message = 'message',
    Call = 'call',
    Coffee = 'coffee',
    Lunch = 'lunch',
    Meeting = 'meeting',
}

const ActivityIcon: FC<IActivityIconProps> = ({type, hover}) => {
    const getIcon = () : ReactElement => {
        switch (type) {
            case iActivityTypeEnum.Text:
                return (<FormatListBulletedIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            case iActivityTypeEnum.Message:
                return (<ChatBubbleIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            case iActivityTypeEnum.Call:
                return (<CallIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            case iActivityTypeEnum.Coffee:
                return (<CoffeeIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            case iActivityTypeEnum.Lunch:
                return (<FreeBreakfastIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            case iActivityTypeEnum.Meeting:
                return (<PersonIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
            default:
                return (<FormatListBulletedIcon className={styles.iconType} sx={{ fontSize: 18 }} />);
        }
    };

    return (
        <div className={clsx(styles.icon, hover && styles.blue)}>
            {getIcon()}
        </div>
    );
}

export default ActivityIcon;
