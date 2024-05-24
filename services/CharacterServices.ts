import { CharacterPage } from '../interfaces/interfaces';

export const getCharactersByPage = async (page: number): Promise<CharacterPage> => {

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return await response.json()
    } catch (error) {
        throw new Error('Error fetching data: , error')        
    }


}
