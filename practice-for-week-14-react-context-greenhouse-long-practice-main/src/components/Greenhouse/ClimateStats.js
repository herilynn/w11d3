import './ClimateStats.css';
import { useClimate, useHumidity } from '../../context/ClimateContext';

function ClimateStats() {

  const {climateName, setClimateName} = useClimate();
  const {humidityName, setHumidityName} = useHumidity();
  
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateName}°F
      </div>
      <div className="humidity">
        Humidity {humidityName}%
      </div>
    </div>
  )
}

export default ClimateStats;