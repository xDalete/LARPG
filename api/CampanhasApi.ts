import { ArrayResponseType } from "@/types/ApiTypes";
import { Campanha } from "@/types/CampanhaTypes";
import { supabase } from "./supabaseClient";

export async function getCampanhas(): Promise<ArrayResponseType<Campanha>> {
    // Busca todas as campanhas ordenadas pela data de criação
    const { data, error } = await supabase
        .from("campanhas")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Erro ao buscar campanhas no Supabase:", error.message);
        return {
            data: [],
            message: `Erro: ${error.message}`,
            page: 1,
            pageSize: 10,
            rowCount: 0,
            success: false
        };
    }

    // Mapeia o snake_case do banco para camelCase do Typescript
    const listaCampanhas: Campanha[] = (data || []).map((item) => ({
        id: item.id.toString(),
        name: item.name,
        description: item.description,
        isMaster: item.is_master,
        avatar: typeof item.avatar === "string" ? JSON.parse(item.avatar) : item.avatar
    }));

    return {
        data: listaCampanhas,
        message: "Campanhas encontradas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: listaCampanhas.length,
        success: true
    };
}
