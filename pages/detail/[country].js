import { useRouter } from "next/router";
import Link from "next/link";

export default function CountryDetail({ countriesData }) {
    const router = useRouter();
    // console.log(router.query);
    // console.log(countriesData);
    let country = countriesData[Number(router.query.country)];
    

    return (
        <div>
            <h1>{country.name}</h1>
            <Link href="/">{"<<Back"}</Link>
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
