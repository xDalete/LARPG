import { ArrayResponseType } from "@/types/ApiTypes";

export type PericiaType = {
    id: string;
    nome: string;
};

export async function getClassProficiencies(): Promise<ArrayResponseType<PericiaType>> {

    return {
        data: [
            { id: "1", nome: "Atletismo" },
            { id: "2", nome: "Acrobacia" },
            { id: "3", nome: "Furtividade" },
            { id: "4", nome: "Prestidigitação" },
            { id: "5", nome: "Arcanismo" },
            { id: "6", nome: "História" },
            { id: "7", nome: "Investigação" },
            { id: "8", nome: "Natureza" },
            { id: "9", nome: "Religião" },
            { id: "10", nome: "Adestrar Animais" },
            { id: "11", nome: "Intuição" },
            { id: "12", nome: "Medicina" },
            { id: "13", nome: "Percepção" },
            { id: "14", nome: "Sobrevivência" },
            { id: "15", nome: "Enganação" },
            { id: "16", nome: "Intimidação" },
            { id: "17", nome: "Performance" },
            { id: "18", nome: "Persuasão" }
        ],
        message: "Perícias de classe carregadas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 18,
        success: true
    };
}
