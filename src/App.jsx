import style from './App.module.scss';
import Overlay from './UI/overlay/Overlay.jsx';
import { useTheme } from './ThemeContext.jsx';
const App = () => {
    const { theme } = useTheme(); 
    return (
        <div className={style[`container-${theme}`]}>
            <Overlay/>
        </div>
    );
}; 

export default App; 