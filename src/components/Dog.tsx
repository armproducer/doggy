import { FunctionComponent } from 'react';
import { Dog } from '../types';
import dogStyles from './Dog.module.sass';

interface IDogCard {
    id: number,
    img: string,
    name: string,
    like: boolean,
    handleDeleteDog: (id: number) => void,
    handleUpdateDog: (dog: Dog) => void
}

const DogCard: FunctionComponent<IDogCard> = (
    {id, img, name, like, handleDeleteDog, handleUpdateDog}
    ) => {

    return (
        <li>
            <img src={img} alt={`собака по имени ${name}`} />
            <span>{name}</span>
            <button onClick={() => handleDeleteDog(id)}>Delete</button>
            <button className={like ? dogStyles.liked : ""} onClick={() => handleUpdateDog({id, img, name, like} as Dog)}>Like</button>
        </li>
    )
}

export default DogCard;