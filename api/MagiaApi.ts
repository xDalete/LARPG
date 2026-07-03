import { ArrayResponseType } from "@/types/ApiTypes";

export type MagiaType = {
    id: string;
    nome: string;
};

export async function getSpells(): Promise<ArrayResponseType<MagiaType>> {

    return {
        data: [
            { id: "1", nome: "Chama Sagrada" },
            { id: "2", nome: "Mãos Flamejantes" },
            { id: "3", nome: "Míssil Mágico" },
            { id: "4", nome: "Prestidigitação" },
            { id: "5", nome: "Ilusão Menor" },
            { id: "6", nome: "Raio de Gelo" },
            { id: "7", nome: "Toque Chocante" }
        ],
        message: "Magias carregadas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 7,
        success: true
    };
}
