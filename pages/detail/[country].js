import { useRouter } from "next/router";

import { FaArrowLeft } from 'react-icons/fa6';
import Link from "next/link";

export default function CountryDetail({ countriesData }) {
    const router = useRouter();

    const country = countriesData[Number(router.query.country)];
    let currencies = '';
    let languages = '';
    let borders = [];

    country.languages.forEach((el, i, arr) => {
        languages += `${el.name}${i < arr.length - 1 ? ', ' : ''}`;
    });

    country.currencies.forEach((el, i, arr) => {
        currencies += `${el.code}${i < arr.length - 1 ? ', ' : ''}`;
    });

    if (country.borders) {
        country.borders.forEach((el) => {
            borders.push(el);
        });
    }

    function handleClick(e) {
        router.push({
            pathname: '/',
            query: {
                region: country.region
            }
        }, '/')
    }

    return (
        <div>
            {/* <Link href="/"><FaArrowLeft className="inline-block" /> Back</Link> */}

            <button onClick={handleClick}>
                <FaArrowLeft className="inline-block" /> Back
            </button>

            <img className='rounded-t ' src={country.flags.svg}></img>

            <h2>{country.name}</h2>

            <div className='py-8'>
                <p className='mb-0.5'>
                    <span>Native Name:</span> {country.nativeName}
                </p>
                <p className='mb-0.5'>
                    <span>Population:</span> {country.population}
                </p>
                <p className='mb-0.5'>
                    <span>Region:</span> {country.region}
                </p>
                <p className='mb-0.5'>
                    <span>Sub Region:</span> {country.nativeName}
                </p>
                <p className='mb-0.5'>
                    <span>Capital:</span> {country.capital}
                </p>
            </div>

            <div className='py-8'>
                <p className='mb-0.5'>
                    <span>Top Level Domain:</span> {country.topLevelDomain}
                </p>
                <p className='mb-0.5'>
                    <span>Currencies:</span> {currencies}
                </p>
                <p className='mb-0.5'>
                    <span>Languages:</span> {languages}
                </p>
            </div>

            <div>
                <h3>Border Countries:</h3>
                <div>

                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/staticdata");
    const json = await response.json();
    const data = JSON.parse(json);


    return {
        props: {
            countriesData: data
        },
    };
}
