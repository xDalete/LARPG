import React, { createContext, useContext, useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Alert } from "react-native";
import { getCharacterById, addCharacter, deleteCharacter } from "@/api/Character.Api";
import { CharacterType, ImageType } from "@/types/Types";
import { supabase } from "@/api/supabaseClient";
import * as ImagePicker from "expo-image-picker";
import { decode } from "base64-arraybuffer";
import {
    obterDeslocamentoPorRaca,
    obterIdiomasPorRaca,
    obterTestesResistenciaPorClasse,
    obterIniciativaPadrao,
    obterClasseArmaduraPadrao,
    calcularModificador
} from "@/utils/dndRules";

type FichaContextType = {
    nomeJogador: string;
    setNomeJogador: (nome: string) => void;
    level: string;
    setLevel: (level: string) => void;
    alinhamentos: string[];
    setAlinhamentos: (alinhamentos: string[]) => void;
    historia: string;
    setHistoria: (historia: string) => void;
    ouro: string;
    setOuro: (ouro: string) => void;
    prata: string;
    setPrata: (prata: string) => void;
    bronze: string;
    setBronze: (bronze: string) => void;
    atributos: Record<string, string>;
    setAtributos: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    iniciativa: string;
    setIniciativa: (iniciativa: string) => void;
    classeArmadura: string;
    setClasseArmadura: (classeArmadura: string) => void;
    deslocamento: string;
    setDeslocamento: (deslocamento: string) => void;
    selectedRaceIds: string[];
    setSelectedRaceIds: (ids: string[]) => void;
    selectedClassIds: string[];
    setSelectedClassIds: (ids: string[]) => void;
    selectedOrigins: string[];
    setSelectedOrigins: (origens: string[]) => void;
    selectedKits: string[];
    setSelectedKits: (kits: string[]) => void;
    selectedSpells: string[];
    setSelectedSpells: (magias: string[]) => void;
    selectedLanguages: string[];
    setSelectedLanguages: (idiomas: string[]) => void;
    selectedSavingThrows: string[];
    setSelectedSavingThrows: (testes: string[]) => void;
    selectedClassProficiencies: string[];
    setSelectedClassProficiencies: (pericias: string[]) => void;
    salvarFicha: () => void;
    characterId?: string;
    campanhaId?: string;
    deletarFicha: () => void;
    avatar: ImageType;
    setAvatar: React.Dispatch<React.SetStateAction<ImageType>>;
    selecionarImagem: () => void;
};

const FichaContext = createContext<FichaContextType | undefined>(undefined);

export function FichaProvider({ children }: { children: React.ReactNode }) {
    const params = useLocalSearchParams();
    const characterId = params.characterId as string | undefined;
    const urlCampanhaId = params.campanhaId as string | undefined;

    const [campanhaId, setCampanhaId] = useState<string | undefined>(urlCampanhaId);
    const [isSaving, setIsSaving] = useState(false);
    const [nomeJogador, setNomeJogador] = useState("");
    const [level, setLevel] = useState("1");
    const [alinhamentos, setAlinhamentos] = useState<string[]>(["Neutro"]);
    const [avatar, setAvatar] = useState<ImageType>({
        uri: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400",
        averageColor: "#5f3b16"
    });
    const [historia, setHistoria] = useState("");
    const [ouro, setOuro] = useState("0");
    const [prata, setPrata] = useState("0");
    const [bronze, setBronze] = useState("0");

    const [atributos, setAtributos] = useState<Record<string, string>>({
        "Força": "10",
        "Destreza": "10",
        "Constituição": "10",
        "Inteligência": "10",
        "Sabedoria": "10",
        "Carisma": "10"
    });

    const [iniciativa, setIniciativa] = useState("+0");
    const [classeArmadura, setClasseArmadura] = useState("10");
    const [deslocamento, setDeslocamento] = useState("9m");

    const [selectedRaceIds, setSelectedRaceIds] = useState<string[]>([]);
    const [selectedClassIds, setSelectedClassIds] = useState<string[]>([]);
    const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
    const [selectedKits, setSelectedKits] = useState<string[]>([]);
    const [selectedSpells, setSelectedSpells] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedSavingThrows, setSelectedSavingThrows] = useState<string[]>([]);
    const [selectedClassProficiencies, setSelectedClassProficiencies] = useState<string[]>([]);

    // Carregar informações se estiver no modo de edição/visualização
    useEffect(() => {
        if (!characterId) {
            // Se for criação de ficha nova, reseta todos os campos para os valores padrão
            setNomeJogador("");
            setLevel("1");
            setAlinhamentos(["Neutro"]);
            setHistoria("");
            setOuro("0");
            setPrata("0");
            setBronze("0");
            setAtributos({
                "Força": "10",
                "Destreza": "10",
                "Constituição": "10",
                "Inteligência": "10",
                "Sabedoria": "10",
                "Carisma": "10"
            });
            setSelectedRaceIds([]);
            setSelectedClassIds([]);
            setSelectedOrigins([]);
            setSelectedKits([]);
            setSelectedSpells([]);
            setSelectedLanguages([]);
            setSelectedSavingThrows([]);
            setSelectedClassProficiencies([]);
            setAvatar({
                uri: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400",
                averageColor: "#5f3b16"
            });
            setCampanhaId(urlCampanhaId);
            return;
        }

        getCharacterById(characterId).then((res) => {
            if (res.success && res.data) {
                const char = res.data;
                setNomeJogador(char.nome);
                setLevel(char.level?.toString() || "1");
                setAlinhamentos(char.alinhamentos || ["Neutro"]);
                setHistoria(char.descricao || "");
                setOuro(char.ouro || "0");
                setPrata(char.prata || "0");
                setBronze(char.bronze || "0");
                setAtributos(char.atributos || {
                    "Força": "10",
                    "Destreza": "10",
                    "Constituição": "10",
                    "Inteligência": "10",
                    "Sabedoria": "10",
                    "Carisma": "10"
                });
                setSelectedRaceIds(char.selectedRaceIds || []);
                setSelectedClassIds(char.selectedClassIds || []);
                setSelectedOrigins(char.selectedOrigins || []);
                setSelectedKits(char.selectedKits || []);
                setSelectedSpells(char.selectedSpells || []);
                setSelectedLanguages(char.selectedLanguages || []);
                setSelectedSavingThrows(char.selectedSavingThrows || []);
                setSelectedClassProficiencies(char.selectedClassProficiencies || []);
                if (char.avatar) {
                    setAvatar(char.avatar);
                }
                if (char.campanhaId) {
                    setCampanhaId(char.campanhaId);
                }
            }
        });
    }, [characterId, urlCampanhaId]);

    // Automação Raça
    useEffect(() => {
        if (selectedRaceIds.length === 0) {
            setDeslocamento("9m");
            return;
        }
        const primeiraRaca = selectedRaceIds[0];
        setDeslocamento(obterDeslocamentoPorRaca(primeiraRaca));
        setSelectedLanguages(obterIdiomasPorRaca(primeiraRaca));
    }, [selectedRaceIds]);

    // Automação Classe
    useEffect(() => {
        if (selectedClassIds.length === 0) {
            setSelectedSavingThrows([]);
            return;
        }
        const primeiraClasse = selectedClassIds[0];
        setSelectedSavingThrows(obterTestesResistenciaPorClasse(primeiraClasse));
    }, [selectedClassIds]);

    // Automação Atributos -> Iniciativa e CA
    useEffect(() => {
        const destreza = atributos["Destreza"] || "10";
        setIniciativa(obterIniciativaPadrao(destreza));
        setClasseArmadura(obterClasseArmaduraPadrao(destreza));
    }, [atributos["Destreza"]]);

    const salvarFicha = async () => {
        if (isSaving) return;

        // Validações básicas de campos obrigatórios conforme as regras
        if (!nomeJogador.trim()) {
            Alert.alert("Campos Obrigatórios", "Por favor, digite o nome do jogador/personagem.");
            return;
        }
        const levelNum = Number(level);
        if (isNaN(levelNum) || !Number.isInteger(levelNum) || levelNum < 1 || levelNum > 20) {
            Alert.alert("Campos Obrigatórios", "Por favor, insira um nível inteiro válido entre 1 e 20.");
            return;
        }
        if (selectedRaceIds.length === 0) {
            Alert.alert("Campos Obrigatórios", "Por favor, selecione uma raça.");
            return;
        }
        if (selectedClassIds.length === 0) {
            Alert.alert("Campos Obrigatórios", "Por favor, selecione uma classe.");
            return;
        }

        setIsSaving(true);

        // Calcula os pontos de vida conforme regras D&D 5e:
        // 1º nível: Vida Máxima do Dado + Mod de Constituição
        // Níveis seguintes: Valor Médio do Dado (arredondado para cima) + Mod de Constituição
        const modConstituicao = calcularModificador(atributos["Constituição"] || "10");
        const classeInicialId = selectedClassIds[0];
        
        let vidaNivel1 = 8; // Média/padrão d8 (Ladino, Clérigo)
        let vidaNiveisSeguintes = 5; 
        
        if (classeInicialId === "1" || classeInicialId === "5") { // Guerreiro / Ranger (d10)
            vidaNivel1 = 10;
            vidaNiveisSeguintes = 6;
        } else if (classeInicialId === "2") { // Mago (d6)
            vidaNivel1 = 6;
            vidaNiveisSeguintes = 4;
        }

        // Regra de D&D 5e: Garante ganho mínimo de 1 PV por nível, mesmo com Modificador de Con negativo
        const ganhoNivel1 = Math.max(1, vidaNivel1 + modConstituicao);
        const ganhoNiveisSeguintes = Math.max(1, vidaNiveisSeguintes + modConstituicao) * (levelNum - 1);
        const pontosVidaMaximos = ganhoNivel1 + ganhoNiveisSeguintes;

        let finalAvatarUri = avatar.uri;

        if (avatar.base64) {
            try {
                const arrayBuffer = decode(avatar.base64);
                
                // Determina o tipo MIME e a extensão do arquivo de forma segura
                let mimeType = avatar.mimeType || "image/jpeg";
                let fileExt = "jpg";

                if (!avatar.mimeType) {
                    if (avatar.uri.includes("data:")) {
                        const match = avatar.uri.match(/data:(image\/[a-zA-Z0-9+.-]+);base64/);
                        if (match && match[1]) {
                            mimeType = match[1];
                        }
                    } else {
                        const cleanUri = avatar.uri.split("?")[0].split("#")[0];
                        const parts = cleanUri.split(".");
                        if (parts.length > 1) {
                            const possibleExt = parts.pop()?.toLowerCase();
                            if (possibleExt && possibleExt.length <= 4 && /^[a-z0-9]+$/.test(possibleExt)) {
                                fileExt = possibleExt;
                                mimeType = `image/${fileExt}`;
                            }
                        }
                    }
                }

                if (mimeType) {
                    const extMatch = mimeType.split("/")[1];
                    if (extMatch) {
                        fileExt = extMatch === "jpeg" ? "jpg" : extMatch;
                    }
                }

                const tempId = characterId || Math.random().toString().replace(".", "");
                const fileName = `${tempId}-${Date.now()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from("avatars")
                    .upload(filePath, arrayBuffer, {
                        contentType: mimeType,
                        upsert: true
                    });

                if (uploadError) {
                    throw uploadError;
                }

                const { data: publicUrlData } = supabase.storage
                    .from("avatars")
                    .getPublicUrl(filePath);

                finalAvatarUri = publicUrlData.publicUrl;
            } catch (err: any) {
                console.error("Erro ao subir imagem para o Supabase via Base64:", err);
                Alert.alert("Erro de Upload", "Não foi possível enviar a foto do personagem. Salvando com avatar padrão.");
                finalAvatarUri = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
            }
        }

        const personagemSalvo: CharacterType = {
            id: characterId || Math.random().toString(),
            campanhaId: campanhaId || undefined,
            nome: nomeJogador,
            descricao: historia || "Um herói de muitas aventuras.",
            avatar: {
                uri: finalAvatarUri,
                averageColor: avatar.averageColor || "#5f3b16"
            },
            level: Number(level) || 1,
            vidaAtual: pontosVidaMaximos,
            vidaMax: pontosVidaMaximos,
            
            // Metadados internos salvos pelo usuário
            alinhamentos,
            historia,
            ouro,
            prata,
            bronze,
            atributos,
            iniciativa,
            classeArmadura,
            deslocamento,
            selectedRaceIds,
            selectedClassIds,
            selectedOrigins,
            selectedKits,
            selectedSpells,
            selectedLanguages,
            selectedSavingThrows,
            selectedClassProficiencies
        };

        addCharacter(personagemSalvo).then((res) => {
            if (res.success) {
                router.navigate(campanhaId ? `/(Campanha)/Grupo?campanhaId=${campanhaId}` : `/(Campanha)/Grupo`);
            } else {
                Alert.alert("Erro", "Não foi possível salvar o personagem.");
                setIsSaving(false);
            }
        }).catch((err) => {
            console.error("Erro ao salvar personagem:", err);
            Alert.alert("Erro", "Ocorreu um erro ao salvar o personagem.");
            setIsSaving(false);
        });
    };

    const selecionarImagem = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permissão necessária", "Precisamos de permissão para acessar sua galeria.");
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
            base64: true
        });

        if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
            const asset = resultado.assets[0];
            setAvatar({
                uri: asset.uri,
                averageColor: "#f1c40f",
                base64: asset.base64 || undefined,
                mimeType: asset.mimeType || undefined
            });
        }
    };

    const deletarFicha = () => {
        if (!characterId) return;
        Alert.alert(
            "Confirmar Exclusão",
            "Deseja realmente deletar este personagem? Esta ação não pode ser desfeita.",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Deletar",
                    style: "destructive",
                    onPress: () => {
                        deleteCharacter(characterId).then((res) => {
                            if (res.success) {
                                router.navigate(campanhaId ? `/(Campanha)/Grupo?campanhaId=${campanhaId}` : `/(Campanha)/Grupo`);
                            } else {
                                Alert.alert("Erro", "Não foi possível deletar o personagem.");
                            }
                        });
                    }
                }
            ]
        );
    };

    return (
        <FichaContext.Provider
            value={{
                nomeJogador, setNomeJogador, level, setLevel, alinhamentos, setAlinhamentos,
                historia, setHistoria, ouro, setOuro, prata, setPrata, bronze, setBronze,
                atributos, setAtributos, iniciativa, setIniciativa, classeArmadura, setClasseArmadura,
                deslocamento, setDeslocamento, selectedRaceIds, setSelectedRaceIds,
                selectedClassIds, setSelectedClassIds, selectedOrigins, setSelectedOrigins,
                selectedKits, setSelectedKits, selectedSpells, setSelectedSpells,
                selectedLanguages, setSelectedLanguages, selectedSavingThrows, setSelectedSavingThrows,
                selectedClassProficiencies, setSelectedClassProficiencies, salvarFicha,
                characterId, campanhaId, deletarFicha, avatar, setAvatar, selecionarImagem
            }}
        >
            {children}
        </FichaContext.Provider>
    );
}

export function useFicha() {
    const context = useContext(FichaContext);
    if (!context) {
        throw new Error("useFicha deve ser usado dentro de um FichaProvider");
    }
    return context;
}
