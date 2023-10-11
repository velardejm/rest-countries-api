import { useEffect, useState } from "react";

import Countries from "@/components/countries/Countries";
import Header from "@/components/header/Header";
import Search from "@/components/search/Search";

export default function Home({ countriesData }) {
  const [selectedRegion, setSelectedRegion] = useState('');


  // useEffect(() => {
  //   window.localStorage.setItem('countries', countriesData);
  //   console.log(window.localStorage.countries);
  // });

  function selectRegion(region) {
    setSelectedRegion(region);
  }

  return (
    <div className="bg-gray-100">
      <Header />
      <Search selectRegion={selectRegion} />
      <Countries countriesData={countriesData} selectedRegion={selectedRegion} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/staticdata");
  const json = await response.json();
  const data = JSON.parse(json);

  return {
    props: {
      countriesData: data
    },
  };
}
