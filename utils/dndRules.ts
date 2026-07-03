// Regras e Fórmulas de D&D 5e

// Cálculo de Modificador de Atributo: (Valor - 10) / 2 arredondado para baixo
export function calcularModificador(valor: number | string): number {
    const valorNumerico = Number(valor) || 10;
    return Math.floor((valorNumerico - 10) / 2);
}

// Formatação do Modificador (ex: +2 ou -1)
export function formatarModificador(modificador: number): string {
    return modificador >= 0 ? `+${modificador}` : `${modificador}`;
}

// Regra de Iniciativa: Baseado no modificador de Destreza
export function obterIniciativaPadrao(destreza: number | string): string {
    const mod = calcularModificador(destreza);
    return formatarModificador(mod);
}

// Regra de Classe de Armadura (CA): 10 + modificador de Destreza
export function obterClasseArmaduraPadrao(destreza: number | string): string {
    const mod = calcularModificador(destreza);
    return (10 + mod).toString();
}

// Regra de Deslocamento por Raça
export function obterDeslocamentoPorRaca(racaId: string): string {
    switch (racaId) {
        case "3": // Anão
            return "7.5m";
        default:
            return "9m"; // Humano, Elfo, Orc, Goblin
    }
}

// Regra de Idiomas Adicionais por Raça
export function obterIdiomasPorRaca(racaId: string): string[] {
    switch (racaId) {
        case "1": // Humano
            return ["Comum"];
        case "2": // Elfo
            return ["Comum", "Élfico"];
        case "3": // Anão
            return ["Comum", "Anão"];
        case "4": // Orc
            return ["Comum", "Orc"];
        case "5": // Goblin
            return ["Comum", "Goblin"];
        default:
            return ["Comum"];
    }
}

// Regra de Testes de Resistência por Classe
export function obterTestesResistenciaPorClasse(classeId: string): string[] {
    switch (classeId) {
        case "1": // Guerreiro
            return ["Força", "Constituição"];
        case "2": // Mago
            return ["Inteligência", "Sabedoria"];
        case "3": // Ladino
            return ["Destreza", "Inteligência"];
        case "4": // Clérigo
            return ["Sabedoria", "Carisma"];
        case "5": // Ranger
            return ["Força", "Destreza"];
        default:
            return [];
    }
}

// Regra de Validação de Multiclasse: Permitido a partir do nível 5
export function permitirMulticlasse(level: number | string): boolean {
    const levelNumerico = Number(level) || 1;
    return levelNumerico >= 5;
}
