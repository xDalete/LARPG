import { ArrayResponseType } from "@/types/ApiTypes";

export type KitType = {
    id: string;
    nome: string;
};

export async function getKits(): Promise<ArrayResponseType<KitType>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
        data: [
            { id: "1", nome: "Artesão" },
            { id: "2", nome: "Alquimista" },
            { id: "3", nome: "Venenos" },
            { id: "4", nome: "Disfarce" },
            { id: "5", nome: "Falsificação" },
            { id: "6", nome: "Herbalismo" },
            { id: "7", nome: "Jogos" },
            { id: "8", nome: "Navegação" },
            { id: "9", nome: "Ladrão" }
        ],
        message: "Kits carregados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 9,
        success: true
    };
}
