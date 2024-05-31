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
        arrCaracteres = JSON.parse(localStorage.getItem(localStorageEnum.key)!);
            
        if (arrCaracteres.length>0){
            let divLista: HTMLDivElement = document.getElementById('lista') as HTMLDivElement;
            let datos: string = '';

            console.table(arrCaracteres);
            
            arrCaracteres.forEach(element => {
                console.log(element);
                datos = datos + element.id + '  ' 
                            + element.name + '  ' +  element.status + '  ' + element.species + '  ' + element.type + '<br>';
            });

            divLista.innerHTML = datos;
        }
    }
}

const form: HTMLFormElement = document.getElementById('nuevoPersonaje') as HTMLFormElement;
form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    saveCharacter();
});

export const saveCharacter = (): void => {
    const formData: FormData = new FormData(form);
    
    const id: string = formData.get('id')!.toString();
    const name: string = formData.get('name')!.toString();
    const estatus: string = formData.get('status')!.toString();
    const species: string = formData.get('species')!.toString();
    const type: string = formData.get('type')!.toString();
    const gender: string = formData.get('gender')!.toString();

    const newCharacter: Character = {
        id: Number(id),
        name: name,
        status: estatus,
        species: species,
        type: type,
        gender: gender,
        origin: {name: '', url: ''},
        location: {name: '', url: ''},
        image: `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        url: `https://rickandmortyapi.com/api/character/${id}`,
        created: new Date(),
    };

    const savedCharacters : (string | null) = localStorage.getItem(localStorageEnum.key);
    
    let characters: Character[] = [];
    if (savedCharacters) {
        characters = JSON.parse(savedCharacters);
    }
    characters.push(newCharacter);
    setCharacters(characters);
    
    console.log('Se agregó un nuevo personaje');
    console.log(newCharacter);

    form.reset();
    showCharacters();
}