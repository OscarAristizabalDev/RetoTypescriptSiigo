
import { localStorageEnum } from './enums/enum';
import { Character } from './interfaces/interfaces';
import { getCharactersByPage } from "./services/CharacterServices";


export let characters: Character[] = []

export const getCharactersByNumber = async () => {

    const pageCharacter = document.getElementById("pageCharacter") as HTMLInputElement;

    if(isNaN(parseInt(pageCharacter.value))) return;

    const { results } = await getCharactersByPage(parseInt(pageCharacter.value));
    setCharacters(results)
}

const setCharacters = (characters: Character[]) => {
    localStorage.setItem(localStorageEnum.key, JSON.stringify(characters))
}

const displayCharacters = (characters: Character[]) => {

    const charactersElement = document.getElementById("characters");

    if(charactersElement){
        charactersElement.innerHTML = '';
        for (const character of characters) {
            const li = document.createElement("li");
            li.innerText = character.name;
            charactersElement.appendChild(li);
        }
    }
}