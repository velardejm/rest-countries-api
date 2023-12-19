import Countries from "@/components/countries/Countries";
import Header from "@/components/header/Header";
import Search from "@/components/search/Search";


export default function Home({ countriesData, region, setRegion }) {

  return (
    <div className="bg-gray-100">
      <Header />
      <Search setRegion={setRegion} region={region} />
      <Countries countriesData={countriesData} region={region} />
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
