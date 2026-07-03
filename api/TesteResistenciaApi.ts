import { ArrayResponseType } from "@/types/ApiTypes";

export type TesteResistenciaType = {
    id: string;
    nome: string;
};

export async function getSavingThrows(): Promise<ArrayResponseType<TesteResistenciaType>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
        data: [
            { id: "Força", nome: "Força" },
            { id: "Destreza", nome: "Destreza" },
            { id: "Constituição", nome: "Constituição" },
            { id: "Inteligência", nome: "Inteligência" },
            { id: "Sabedoria", nome: "Sabedoria" },
            { id: "Carisma", nome: "Carisma" }
        ],
        message: "Testes de resistência carregados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 6,
        success: true
    };
}
