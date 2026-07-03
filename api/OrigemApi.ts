import { ArrayResponseType } from "@/types/ApiTypes";

export type OrigemType = {
    id: string;
    nome: string;
    descricao?: string;
};

export async function getOrigins(): Promise<ArrayResponseType<OrigemType>> {

    return {
        data: [
            { id: "1", nome: "Órfão", descricao: "Cresceu nas ruas sem família." },
            { id: "2", nome: "Nobre", descricao: "Nascido em berço de ouro." },
            { id: "3", nome: "Soldado", descricao: "Membro de um exército ou milícia." },
            { id: "4", nome: "Acólito", descricao: "Serviu em um templo ou ordem religiosa." },
            { id: "5", nome: "Charlatão", descricao: "Mestre da trapaça e disfarce." },
            { id: "6", nome: "Criminoso", descricao: "Especialista em infringir as leis." },
            { id: "7", nome: "Herói do Povo", descricao: "Defensor das pessoas comuns." },
            { id: "8", nome: "Sábio", descricao: "Estudioso dos mistérios do mundo." }
        ],
        message: "Origens carregadas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 8,
        success: true
    };
}
