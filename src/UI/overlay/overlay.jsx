import style from './overlay.module.scss';
import { useTheme } from '../../ThemeContext.jsx';

const overlay = () => {
    const { theme } = useTheme();

    return (
        <div className={style.overlay}>
            <div className={style[`overlay-${theme}`]}>


            </div>
        </div>

    )
}; 

export default overlay; 