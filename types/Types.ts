export type ImageType = {
    uri: string;
    averageColor?: string;
    base64?: string;
};
export type CharacterType = {
    id: string;
    nome: string;
    descricao: string;
    avatar: ImageType;
    level?: number;
    vidaAtual: number;
    vidaMax: number;
    campanhaId?: string;
    
    // Campos adicionais salvos pelo usuário
    alinhamentos?: string[];
    historia?: string;
    ouro?: string;
    prata?: string;
    bronze?: string;
    atributos?: Record<string, string>;
    iniciativa?: string;
    classeArmadura?: string;
    deslocamento?: string;
    selectedRaceIds?: string[];
    selectedClassIds?: string[];
    selectedOrigins?: string[];
    selectedKits?: string[];
    selectedSpells?: string[];
    selectedLanguages?: string[];
    selectedSavingThrows?: string[];
    selectedClassProficiencies?: string[];
}

export type RaceType = {
    id: string;
    nome: string;
    descricao?: string;
};

export type ClassType = {
    id: string;
    nome: string;
    descricao?: string;
};