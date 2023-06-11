
import {Character} from "@/interfaces/characters";
import {BASE_URL} from "@/pages/api/constants";
import {NextApiRequest, NextApiResponse} from "next";


export const getCharacters = async <T>() => {
    return fetch(BASE_URL).then((response) => response.json() as unknown as T)
        .then((result) => result)
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<Character[]>) => {

    await getCharacters<Character[]>().then((result) => res.status(200).json(result))
        .catch((error: any) => {
            console.error(error);
            res.status(500)
        })
}
