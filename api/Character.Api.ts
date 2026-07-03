import { ArrayResponseType, ResponseType } from "@/types/ApiTypes";
import { CharacterType } from "@/types/Types";

let listaPersonagens: CharacterType[] = [
    {
        id: "1",
        nome: "Aragorn",
        descricao: "Um guerreiro habilidoso e líder nato.",
        avatar: {
            uri: "https://cdn.discordapp.com/attachments/1404178863378141361/1508948339390025738/image.png?ex=6a176527&is=6a1613a7&hm=072691e66fec77d4e94159f73a4119bc104218e54d89873c850645e69a90a004&",
            averageColor: "#5f3b16"
        },
        level: 5,
        vidaAtual: 40,
        vidaMax: 50,
        atributos: {
            "Força": "16",
            "Destreza": "14",
            "Constituição": "15",
            "Inteligência": "10",
            "Sabedoria": "12",
            "Carisma": "14"
        },
        selectedClassIds: ["1"],
        selectedRaceIds: ["1"], 
        selectedLanguages: ["Comum"]
    },
    {
        id: "2",
        nome: "Legolas",
        descricao: "Um elfo arqueiro com habilidades excepcionais.",
        avatar: {
            uri: "https://cdn.discordapp.com/attachments/1404178863378141361/1508948425926774945/image.png?ex=6a17653b&is=6a1613bb&hm=c8f06325bce73d6d998e6063835c06d71be1c79e5a043fd6e726b6482230ce75&",
            averageColor: "#4d1c06"
        },
        level: 4,
        vidaAtual: 35,
        vidaMax: 45,
        atributos: {
            "Força": "11",
            "Destreza": "18",
            "Constituição": "12",
            "Inteligência": "11",
            "Sabedoria": "13",
            "Carisma": "12"
        },
        selectedClassIds: ["5"],
        selectedRaceIds: ["2"],
        deslocamento: "9m",
        selectedLanguages: ["Comum", "Élfico"]
    }
];

export async function getCharacters(): Promise<ArrayResponseType<CharacterType>> {
    await new Promise((resolve) => setTimeout(resolve, 300)); 
    return {
        data: listaPersonagens,
        message: "Personagens encontrados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: listaPersonagens.length,
        success: true
    };
}

export async function getCharacterById(id: string): Promise<ResponseType<CharacterType | undefined>> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const personagem = listaPersonagens.find((p) => p.id === id);
    return {
        data: personagem,
        message: personagem ? "Personagem encontrado" : "Personagem não encontrado",
        success: !!personagem
    };
}

export async function addCharacter(personagem: CharacterType): Promise<ResponseType<CharacterType>> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    const index = listaPersonagens.findIndex((p) => p.id === personagem.id);
    if (index >= 0) {
        listaPersonagens[index] = personagem;
    } else {
        listaPersonagens.push(personagem);
    }
    
    return {
        data: personagem,
        message: "Personagem salvo com sucesso",
        success: true
    };
}