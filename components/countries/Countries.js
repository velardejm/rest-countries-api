import CountryCard from "../country-card/CountryCard"

export default function Countries({ countriesData }) {

    return (
        <div>
            {countriesData.map((country, index) => {
                return <CountryCard country={country} />
            })}
        </div>
    )
}