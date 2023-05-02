import '../../assets/scss/Dashboard.scss'
import CurrentCityNow from '../Dashboard/CurrentCityNow.jsx'
import CurrentCityForecast from '../Dashboard/CurrentCityForecast.jsx'


const Dashboard = () => {
    return (
        <div className="container__dashboard dashboard">
            <CurrentCityNow />
            <CurrentCityForecast />
        </div>
    )
}

export default Dashboard