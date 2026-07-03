import React, { createContext, useContext, useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Alert } from "react-native";
import { getCharacterById, addCharacter } from "@/api/Character.Api";
import { CharacterType } from "@/types/Types";
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
};

const FichaContext = createContext<FichaContextType | undefined>(undefined);

export function FichaProvider({ children }: { children: React.ReactNode }) {
    const params = useLocalSearchParams();
    const characterId = params.characterId as string | undefined;

    const [nomeJogador, setNomeJogador] = useState("");
    const [level, setLevel] = useState("1");
    const [alinhamentos, setAlinhamentos] = useState<string[]>(["Neutro"]);
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
            }
        });
    }, [characterId]);

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

    const salvarFicha = () => {
        // Validações básicas de campos obrigatórios conforme as regras
        if (!nomeJogador.trim()) {
            Alert.alert("Campos Obrigatórios", "Por favor, digite o nome do jogador/personagem.");
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

        // Calcula os pontos de vida conforme regras D&D 5e:
        // Dados de vida inicial da primeira classe selecionada + Mod de Constituição
        const modConstituicao = calcularModificador(atributos["Constituição"] || "10");
        const classeInicialId = selectedClassIds[0];
        
        let vidaBaseDaClasse = 8; // Média das classes (Ladino, Clérigo)
        if (classeInicialId === "1" || classeInicialId === "5") {
            vidaBaseDaClasse = 10; // Guerreiro / Ranger
        } else if (classeInicialId === "2") {
            vidaBaseDaClasse = 6; // Mago
        }

        const pontosVidaMaximos = vidaBaseDaClasse + modConstituicao;

        const personagemSalvo: CharacterType = {
            id: characterId || Math.random().toString(),
            nome: nomeJogador,
            descricao: historia || "Um herói de muitas aventuras.",
            avatar: {
                uri: "https://cdn.discordapp.com/attachments/1404178863378141361/1508948339390025738/image.png?ex=6a176527&is=6a1613a7&hm=072691e66fec77d4e94159f73a4119bc104218e54d89873c850645e69a90a004&",
                averageColor: "#5f3b16"
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

        addCharacter(personagemSalvo).then(() => {
            router.push('/(Campanha)/Grupo');
        });
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
                selectedClassProficiencies, setSelectedClassProficiencies, salvarFicha
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
