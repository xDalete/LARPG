import { ArrayResponseType } from "@/types/ApiTypes";
import { Campanha } from "@/types/CampanhaTypes";

export async function getCampanhas(): Promise<ArrayResponseType<Campanha>> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simula um atraso de 1 segundo
  return {
    data: [
      {
        id: "1",
        name: "Susurro das Cinzas",
        description:
          "Em 'Susurro das Cinzas', os jogadores embarcam em uma jornada épica por um mundo onde o destino é moldado por forças misteriosas. Cada decisão tomada pelos personagens influencia o curso da história, criando uma narrativa dinâmica e envolvente. Os jogadores enfrentam desafios, formam alianças e descobrem segredos enquanto exploram um universo repleto de magia, intriga e aventura.",
        isMaster: true,
        avatar: {
          uri: "https://cdn.discordapp.com/attachments/1404178863378141361/1508948339390025738/image.png?ex=6a176527&is=6a1613a7&hm=072691e66fec77d4e94159f73a4119bc104218e54d89873c850645e69a90a004&",
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
          uri: "https://cdn.discordapp.com/attachments/1404178863378141361/1508948425926774945/image.png?ex=6a17653b&is=6a1613bb&hm=c8f06325bce73d6d998e6063835c06d71be1c79e5a043fd6e726b6482230ce75&",
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
