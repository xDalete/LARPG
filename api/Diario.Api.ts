import { ArrayResponseType, ResponseType } from "@/types/ApiTypes";
import { DiarioEntryType } from "@/types/Types";
import { supabase } from "./supabaseClient";

function mapearDiario(item: any): DiarioEntryType {
    return {
        id: item.id.toString(),
        campanhaId: item.campanha_id,
        dia: item.dia,
        mes: item.mes,
        titulo: item.titulo,
        descricao: item.descricao,
        createdAt: item.created_at
    };
}

export async function getDiarioEntries(campanhaId: string): Promise<ArrayResponseType<DiarioEntryType>> {
    const { data, error } = await supabase
        .from("diarios")
        .select("*")
        .eq("campanha_id", campanhaId)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Erro ao buscar diario no Supabase:", error.message);
        return {
            data: [],
            message: `Erro: ${error.message}`,
            page: 1,
            pageSize: 10,
            rowCount: 0,
            success: false
        };
    }

    const entradas = (data || []).map(mapearDiario);

    return {
        data: entradas,
        message: "Diário carregado com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: entradas.length,
        success: true
    };
}

export async function addDiarioEntry(entrada: DiarioEntryType): Promise<ResponseType<DiarioEntryType>> {
    const payload: any = {
        campanha_id: entrada.campanhaId,
        dia: entrada.dia,
        mes: entrada.mes,
        titulo: entrada.titulo,
        descricao: entrada.descricao
    };

    if (entrada.id) {
        payload.id = entrada.id;
    }

    const { data, error } = await supabase
        .from("diarios")
        .upsert(payload)
        .select()
        .single();

    if (error) {
        console.error("Erro ao salvar entrada de diário no Supabase:", error.message);
        return {
            data: entrada,
            message: `Erro ao salvar: ${error.message}`,
            success: false
        };
    }

    return {
        data: mapearDiario(data),
        message: "Entrada de diário salva com sucesso",
        success: true
    };
}

export async function deleteDiarioEntry(id: string): Promise<ResponseType<null>> {
    console.log("[Diario API] Deletando entrada ID:", id);
    const { error } = await supabase
        .from("diarios")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("[Diario API] Erro ao deletar no Supabase:", error.message);
        return {
            data: null,
            message: `Erro ao deletar: ${error.message}`,
            success: false
        };
    }

    console.log("[Diario API] Entrada deletada com sucesso no Supabase!");

    return {
        data: null,
        message: "Entrada de diário deletada com sucesso",
        success: true
    };
}
