export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    municipio: string;
    estado: string;
}

export const dummyUserList : IUser[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Tony",
    lastName: "Stark",
    email: "start@stark.com",
    municipio: "Foz do Iguaçu",
    estado: "Paraná"
},
{
    id: new Date().toJSON().toString(),
    firstName: "Bruce",
    lastName: "Wayne",
    email: "wayne@wayne.com",
    municipio: "Santa Terezinha de Itaipu",
    estado: "Paraná"
},]