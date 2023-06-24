export interface IAnimal {
    id: string;
    animalName: string;
    color: string;
}

export const dummyUserList : IAnimal[] = [{
    id: new Date().toJSON().toString(),
    animalName: "Cérbero",
    color: "branco"
},
{
    id: new Date().toJSON().toString(),
    animalName: "Patricia",
    color: "Azul"
},]