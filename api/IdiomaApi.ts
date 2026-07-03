import { ArrayResponseType } from "@/types/ApiTypes";

export type IdiomaType = {
    id: string;
    nome: string;
};

export async function getLanguages(): Promise<ArrayResponseType<IdiomaType>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
        data: [
            { id: "1", nome: "Comum" },
            { id: "2", nome: "Élfico" },
            { id: "3", nome: "Anão" },
            { id: "4", nome: "Orc" },
            { id: "5", nome: "Goblin" },
            { id: "6", nome: "Dracônico" },
            { id: "7", nome: "Gigante" },
            { id: "8", nome: "Goblinoide" },
            { id: "9", nome: "Abissal" },
            { id: "10", nome: "Celestial" }
        ],
        message: "Idiomas carregados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 10,
        success: true
    };
}
