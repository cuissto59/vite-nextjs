"use client"
import {GalleryCard} from "@/components/GalleryCard";
import {CharacterAtom} from "@/state/atoms";
import {useAtom} from "jotai";

export interface CharacterInfoSectionProps {
}

export const CharacterInfoSection = ({}: CharacterInfoSectionProps) => {
    const [character] = useAtom(CharacterAtom);
    return (
        <>
            <GalleryCard character={character}/>
        </>
    );
}