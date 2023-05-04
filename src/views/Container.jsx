import '../assets/scss/Container.scss'
import SearchBar from '../components/SearchBar.jsx'
import Dashboard from '../components/Dashboard/Dashboard.jsx'
import MeteoData from '../components/MeteoData.jsx'
import OtherCities from '../components/OtherCities.jsx'

const Container = () => {
    return (
        <div className="container">
            <SearchBar />
            <Dashboard />    
            <div className="container__other-data">
                <MeteoData />
                <OtherCities />
            </div>
        </div>
    )
}

export default Container