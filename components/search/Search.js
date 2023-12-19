import RegionDropdown from "./RegionDropdown";
import Searchbar from "./Searchbar";

export default function Search({ setRegion, region }) {
  return (
    <div className='mx-5 '>
      <div className="flex flex-col g-slate-500">
        <Searchbar />
        <RegionDropdown setRegion={setRegion} region={region} />
      </div>
    </div>
  );
}
