import CountryCard from "../country-card/CountryCard"

export default function Countries({ countriesData, selectedRegion }) {

    return (
        <div>
            {countriesData.map((country, index) => {
                if(country.region !== selectedRegion) {
                    return
                } else {
                    return <CountryCard country={country} key={index} />
                }
                
            })}

        </div>
    )
}