import { BsMoon } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between py-7 px-5 shadow-md mb-10 bg-white'>
      <Link className='font-bold' href='#'>Where in the world?</Link>
      <div className='flex items-center'>
        <BsMoon className='mx-3'/>
        <button>Dark Mode</button>
      </div>
    </div>
  );
}
