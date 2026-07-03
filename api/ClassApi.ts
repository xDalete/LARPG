import { ArrayResponseType } from "@/types/ApiTypes";
import { ClassType } from "@/types/Types";

export async function getClasses(): Promise<ArrayResponseType<ClassType>> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
        data: [
            { id: "1", nome: "Guerreiro", descricao: "Especialista em combate corpo a corpo." },
            { id: "2", nome: "Mago", descricao: "Lança feitiços a distância." },
            { id: "3", nome: "Ladino", descricao: "Astuto e furtivo." },
            { id: "4", nome: "Clérigo", descricao: "Cura e protege o grupo." },
            { id: "5", nome: "Ranger", descricao: "Habilidoso com arco e rastreamento." }
        ],
        message: "Classes carregadas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 5,
        success: true
    };
}
