import style from './App.module.scss';
import Overlay from './UI/overlay/Overlay.jsx';
import { useTheme } from './ThemeContext.jsx';
const App = () => {
    const  { theme, toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}> toggle </button>
        </div>
    );
}; 

export default App; 