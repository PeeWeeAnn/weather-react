import '../../assets/scss/CurrentCityNow.scss'
import weatherBig from '../../assets/icons/weather-big.svg'

const CurrentCityNow = () => {
    return (
        <div className="dashboard__city-now city-now">
            <div className="city-now__city city">
                <div className="city__name">Vancouver</div>
                <div className="city__location">British Columbia, Canada</div>
            </div>
            <div className="city-now__weather-now weather-now">
                <div className="weather-now__image">
                    <img src={weatherBig} alt="Weather" />
                </div>
                <div className="weather-now__temperature">
                    +8
                </div>
            </div>
        </div>
    )
}

export default CurrentCityNow