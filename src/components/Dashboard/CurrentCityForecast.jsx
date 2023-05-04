import '../../assets/scss/CurrentCityForecast.scss'
import partlyCloudy from '../../assets/icons/partly-cloudy.svg'

const CurrentCityForecast = () => {
    return (
        <>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">12:00 AM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">4:00 AM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">8:00 AM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">12:00 PM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">16:00 PM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">20:00 PM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard__forecast forecast">
            <div className="forecast__element element">
                <div className="element__time">12:00 AM</div>
                <div className="element__data data">
                    <div className="data__image">
                        <img src={partlyCloudy} alt="Weather" />
                    </div>
                    <div className="data__temperature">
                        +4
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default CurrentCityForecast