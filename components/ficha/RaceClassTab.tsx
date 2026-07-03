import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getFichaMetadados, FichaMetadados } from "@/api/FichaMetadadosApi";
import DropdownMultiSelect from "@/components/common/DropdownMultiSelect";
import { permitirMulticlasse } from "@/utils/dndRules";
import { globalStyles } from "@/constants/globalStyles";

type RaceClassTabProps = {
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
    level: string;
};

const RaceClassTab = ({
    selectedRaceIds,
    setSelectedRaceIds,
    selectedClassIds,
    setSelectedClassIds,
    selectedOrigins,
    setSelectedOrigins,
    selectedKits,
    setSelectedKits,
    selectedSpells,
    setSelectedSpells,
    selectedLanguages,
    setSelectedLanguages,
    selectedSavingThrows,
    setSelectedSavingThrows,
    selectedClassProficiencies,
    setSelectedClassProficiencies,
    level
}: RaceClassTabProps) => {
    const [metadados, setMetadados] = useState<FichaMetadados | null>(null);

    useEffect(() => {
        let mounted = true;
        getFichaMetadados().then((resultado) => {
            if (mounted) {
                setMetadados(resultado.data);
            }
        });
        return () => {
            mounted = false;
        };
    }, []);

    const limiteClasses = permitirMulticlasse(level) ? undefined : 1;

    return (
        <View style={[globalStyles.container, { gap: 12 }]}>
            <DropdownMultiSelect
                label="Raça"
                options={metadados?.races || []}
                selected={selectedRaceIds}
                onChange={setSelectedRaceIds}
                placeholder="Selecione uma raça..."
                maxSelections={1}
            />

            <DropdownMultiSelect
                label="Origem"
                options={metadados?.origins || []}
                selected={selectedOrigins}
                onChange={setSelectedOrigins}
                placeholder="Selecione origem..."
                maxSelections={1}
            />

            <DropdownMultiSelect
                label="Classe"
                options={metadados?.classes || []}
                selected={selectedClassIds}
                onChange={setSelectedClassIds}
                placeholder="Selecione classe..."
                maxSelections={limiteClasses}
            />

            <DropdownMultiSelect
                label="Kits"
                options={metadados?.kits || []}
                selected={selectedKits}
                onChange={setSelectedKits}
                placeholder="Selecione kits..."
            />

            <DropdownMultiSelect
                label="Magias/Truques"
                options={metadados?.spells || []}
                selected={selectedSpells}
                onChange={setSelectedSpells}
                placeholder="Selecione magias..."
            />

            <DropdownMultiSelect
                label="Idiomas"
                options={metadados?.languages || []}
                selected={selectedLanguages}
                onChange={setSelectedLanguages}
                placeholder="Selecione idiomas..."
            />

            <DropdownMultiSelect
                label="Teste de resistência"
                options={metadados?.savingThrows || []}
                selected={selectedSavingThrows}
                onChange={setSelectedSavingThrows}
                placeholder="Selecione atributos..."
            />

            <DropdownMultiSelect
                label="Perícias de classe"
                options={metadados?.proficiencies || []}
                selected={selectedClassProficiencies}
                onChange={setSelectedClassProficiencies}
                placeholder="Selecione perícias..."
            />
        </View>
    );
};

export default RaceClassTab;
