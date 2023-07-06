import {getCharacters} from "@/app/api/Characters/characters";
import {Hero} from "@/components/Hero/Hero";
import {use} from 'react'

export default function Home() {
    const data = use(getCharacters())
    return (
        <>
            <Hero/>
        </>
    )
}
