import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Searchbar() {
  return (
    <div className='flex items-center bg-white px-7 py-3 mb-8 rounded shadow-md'>
      <FaMagnifyingGlass className='mx-3'/>
      <input className='grow' placeholder='Search for a country'></input>
    </div>
  );
}
