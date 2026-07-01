import { ArrayResponseType } from "@/types/ApiTypes";
import { CharacterType } from "@/types/Types";

export async function getCharacters(): Promise<ArrayResponseType<CharacterType>> {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    return {
        data: [
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
                vidaMax: 50
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
                vidaMax: 45
            }
        ],
        message: "Personagens encontrados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 2,
        success: true
    };
}