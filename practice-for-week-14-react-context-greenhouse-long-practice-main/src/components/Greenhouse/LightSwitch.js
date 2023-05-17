import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext';


function LightSwitch() {

  const{themeName, setThemeName} = useTheme()

  const handleClick = (e) => {
    e.preventDefault(); 
    if (themeName === 'day') {
      setThemeName('night')
    } else {
      setThemeName('day')
    }
  }

  return (  
    <div className={`light-switch ${themeName}`}>
      <button onClick={handleClick} className="on">DAY</button>
      <button  onClick={handleClick} className="off">NIGHT</button>
    </div>
  );
}

export default LightSwitch;