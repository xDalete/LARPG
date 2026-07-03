import { ArrayResponseType, ResponseType } from "@/types/ApiTypes";
import { CharacterType } from "@/types/Types";
import { supabase } from "./supabaseClient";

// Helper para converter o registro do Supabase (snake_case) no modelo do TypeScript (camelCase)
function mapearPersonagem(item: any): CharacterType {
    return {
        id: item.id.toString(),
        nome: item.nome,
        descricao: item.descricao,
        avatar: typeof item.avatar === "string" ? JSON.parse(item.avatar) : item.avatar,
        level: item.level,
        vidaAtual: item.vida_atual,
        vidaMax: item.vida_max,
        alinhamentos: item.alinhamentos,
        historia: item.historia,
        ouro: item.ouro,
        prata: item.prata,
        bronze: item.bronze,
        atributos: item.atributos,
        iniciativa: item.iniciativa,
        classeArmadura: item.classe_armadura,
        deslocamento: item.deslocamento,
        selectedRaceIds: item.selected_race_ids,
        selectedClassIds: item.selected_class_ids,
        selectedOrigins: item.selected_origins,
        selectedKits: item.selected_kits,
        selectedSpells: item.selected_spells,
        selectedLanguages: item.selected_languages,
        selectedSavingThrows: item.selected_saving_throws,
        selectedClassProficiencies: item.selected_class_proficiencies
    };
}

export async function getCharacters(): Promise<ArrayResponseType<CharacterType>> {
    const { data, error } = await supabase
        .from("personagens")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Erro ao buscar personagens no Supabase:", error.message);
        return {
            data: [],
            message: `Erro: ${error.message}`,
            page: 1,
            pageSize: 10,
            rowCount: 0,
            success: false
        };
    }

    const personagens = (data || []).map(mapearPersonagem);

    return {
        data: personagens,
        message: "Personagens encontrados com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: personagens.length,
        success: true
    };
}

export async function getCharacterById(id: string): Promise<ResponseType<CharacterType | undefined>> {
    const { data, error } = await supabase
        .from("personagens")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) {
        console.error("Erro ao buscar personagem por ID no Supabase:", error.message);
        return {
            data: undefined,
            message: `Erro: ${error.message}`,
            success: false
        };
    }

    return {
        data: data ? mapearPersonagem(data) : undefined,
        message: data ? "Personagem encontrado" : "Personagem não encontrado",
        success: !!data
    };
}

export async function addCharacter(personagem: CharacterType): Promise<ResponseType<CharacterType>> {
    const payload = {
        id: personagem.id,
        nome: personagem.nome,
        descricao: personagem.descricao,
        avatar: personagem.avatar,
        level: personagem.level,
        vida_atual: personagem.vidaAtual,
        vida_max: personagem.vidaMax,
        alinhamentos: personagem.alinhamentos,
        historia: personagem.historia,
        ouro: personagem.ouro,
        prata: personagem.prata,
        bronze: personagem.bronze,
        atributos: personagem.atributos,
        iniciativa: personagem.iniciativa,
        classe_armadura: personagem.classeArmadura,
        deslocamento: personagem.deslocamento,
        selected_race_ids: personagem.selectedRaceIds,
        selected_class_ids: personagem.selectedClassIds,
        selected_origins: personagem.selectedOrigins,
        selected_kits: personagem.selectedKits,
        selected_spells: personagem.selectedSpells,
        selected_languages: personagem.selectedLanguages,
        selected_saving_throws: personagem.selectedSavingThrows,
        selected_class_proficiencies: personagem.selectedClassProficiencies
    };

    // Upsert insere se for registro novo ou atualiza se o ID já existir
    const { error } = await supabase
        .from("personagens")
        .upsert(payload);

    if (error) {
        console.error("Erro ao salvar personagem no Supabase:", error.message);
        return {
            data: personagem,
            message: `Erro ao salvar: ${error.message}`,
            success: false
        };
    }

    return {
        data: personagem,
        message: "Personagem salvo com sucesso",
        success: true
    };
}

export async function deleteCharacter(id: string): Promise<ResponseType<null>> {
    const { error } = await supabase
        .from("personagens")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Erro ao deletar personagem no Supabase:", error.message);
        return {
            data: null,
            message: `Erro ao deletar: ${error.message}`,
            success: false
        };
    }

    return {
        data: null,
        message: "Personagem deletado com sucesso",
        success: true
    };
}