import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <Link href="/">
      <div className='cursor-pointer rounded-b mx-20 bg-white mb-10'>
        <img className='rounded-t ' src={country.flags.svg}></img>
        <div className='py-8 px-6'>
          <h2 className='font-bold mb-3'>{country.name}</h2>
          <p className='mb-0.5'>
            <span>Population:</span> {country.population}
          </p>
          <p className='mb-0.5'>
            <span>Region:</span> {country.region}
          </p>
          <p className='mb-0.5'>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
