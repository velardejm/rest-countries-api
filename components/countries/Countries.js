import CountryCard from "../country-card/CountryCard"

export default function Countries({ countriesData, region }) {

    return (
        <div className="flex flex-wrap justify-between">
            {countriesData.map((country, index) => {
                if(country.region !== region) {
                    return
                } else {
                    return <CountryCard country={country} index={index} key={index} />
                }
                
            })}

        </div>
    )
}