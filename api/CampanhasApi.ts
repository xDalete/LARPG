import { ArrayResponseType } from "@/types/ApiTypes";
import { Campanha } from "@/types/CampanhaTypes";

export async function getCampanhas(): Promise<ArrayResponseType<Campanha>> {
    // Retorna as campanhas mockadas de forma estática com imagens permanentes do Unsplash
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        data: [
            {
                id: "1",
                name: "Sussurro das Cinzas",
                description:
                    "Em 'Sussurro das Cinzas', os jogadores embarcam em uma jornada épica por um mundo onde o destino é moldado por forças misteriosas. Cada decisão tomada pelos personagens influencia o curso da história, criando uma narrativa dinâmica e envolvente. Os jogadores enfrentam desafios, formam alianças e descobrem segredos enquanto exploram um universo repleto de magia, intriga e aventura.",
                isMaster: true,
                avatar: {
                    uri: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
                    averageColor: "#5f3b16"
                }
            },
            {
                id: "2",
                name: "Ventos do Destino",
                description:
                    "Em 'Ventos do Destino', os jogadores embarcam em uma jornada épica por um mundo onde o destino é moldado por forças misteriosas. Cada decisão tomada pelos personagens influencia o curso da história, criando uma narrativa dinâmica e envolvente. Os jogadores enfrentam desafios, formam alianças e descobrem segredos enquanto exploram um universo repleto de magia, intriga e aventura.",
                isMaster: false,
                avatar: {
                    uri: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
                    averageColor: "#4d1c06"
                }
            }
        ],
        message: "Campanhas encontradas com sucesso",
        page: 1,
        pageSize: 10,
        rowCount: 2,
        success: true
    };
}
