import {Character} from "@/interfaces/characters";
import {Pagination} from "@/interfaces/Pagination";
import {BASE_URL} from "../Characters/constants";


export const getCharacters = async () => {
    const res = await fetch(BASE_URL);
    const data: Pagination<Character> = await res.json();

    return data
}