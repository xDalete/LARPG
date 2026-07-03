import { ArrayResponseType } from "@/types/ApiTypes";
import { RaceType } from "@/types/Types";

export async function getRaces(): Promise<ArrayResponseType<RaceType>> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
        data: [
            { id: "1", nome: "Humano", descricao: "Versátil e adaptável." },
            { id: "2", nome: "Elfo", descricao: "Ágil e ligado à natureza." },
            { id: "3", nome: "Anão", descricao: "Resistente e habilidoso na forja." },
            { id: "4", nome: "Orc", descricao: "Forte e combativo." },
            { id: "5", nome: "Goblin", descricao: "Astuto e pequeno." }
        ],
        message: "Raças carregadas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 5,
        success: true
    };
}
