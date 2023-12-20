import Link from "next/link";

export default function CountryCard({ country, index }) {

  return (
    <div className="relative w-[calc(25vw*0.9)] mb-5">
      <Link href={`/detail/${index}`} className="absolute w-[100%] h-[100%]"></Link>
      <div className='cursor-pointer rounded-b bg-white'>
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
    </div>
  );
}
