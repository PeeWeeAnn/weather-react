import '../../assets/scss/Dashboard.scss'
import CurrentCityNow from '../Dashboard/CurrentCityNow.jsx'
import CurrentCityForecast from '../Dashboard/CurrentCityForecast.jsx'


const Dashboard = () => {
    return (
        <div className="container__dashboard dashboard">
            <CurrentCityNow />
            <div className="dashboard__forecast forecast">
                 <CurrentCityForecast />
            </div>
        </div>
    )
}

export default Dashboard