import { localStorageEnum } from './enums/enum';
import { Character } from './interfaces/interfaces';
import { getCharactersByPage } from "./services/CharacterServices";


export let characters: Character[] = []
export let arrCaracteres: Array<Character> = [];  

export const getCharactersByNumber = async () => {
    arrCaracteres.length=0;
    document.getElementById('lista')!.innerHTML='';

    const pageCharacter = document.getElementById("pageCharacter") as HTMLInputElement;

    if(isNaN(parseInt(pageCharacter.value))) return;

    const { results } = await getCharactersByPage(parseInt(pageCharacter.value));
    setCharacters(results);
    showCharacters();
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

export const showCharacters = () => {
  
        if (localStorage.getItem(localStorageEnum.key)) {        
          arrCaracteres=JSON.parse(localStorage.getItem(localStorageEnum.key)!)    
                
          if (arrCaracteres.length>0)      
          {                    
             arrCaracteres.forEach(element => {
                console.log(element);
                document.getElementById('lista')!.innerHTML= document.getElementById('lista')!.innerHTML + element.id + '   ' 
                 + element.name + '   ' +  element.status + '   ' + element.species + '   ' + element.type + '<br>';
    
    
             });
          
          }
        
        }     
    }
