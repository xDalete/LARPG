export type ImageType = {
    uri: string;
    averageColor?: string;
};
export type CharacterType = {
    id: string;
    nome: string;
    descricao: string;
    avatar: ImageType;
    level?: number;
    vidaAtual: number;
    vidaMax: number;
}