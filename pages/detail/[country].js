import { useRouter } from "next/router";
import Link from "next/link";

export default function CountryDetail() {
    const router = useRouter();
    console.log(router.query);
    

    return (
        <div>
            <h1>{}</h1>
            <Link href="/">{"<<Back"}</Link>
        </div>
    )
}