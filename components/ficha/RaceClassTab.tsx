import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import FormInput from "@/components/formComponents/FormInput";
import { getRaces } from "@/api/RacaApi";
import { getClasses } from "@/api/ClassApi";
import MultiSelect from "@/components/common/MultiSelect";
import { RaceType, ClassType } from "@/types/Types";

const RaceClassTab = () => {
    const [availableRaces, setAvailableRaces] = useState<RaceType[]>([]);
    const [availableClasses, setAvailableClasses] = useState<ClassType[]>([]);
    const [selectedRaceIds, setSelectedRaceIds] = useState<string[]>([]);
    const [selectedClassIds, setSelectedClassIds] = useState<string[]>([]);

    useEffect(() => {
        let mounted = true;

        getRaces().then((res) => {
            if (mounted) setAvailableRaces(res.data || []);
        });

        getClasses().then((res) => {
            if (mounted) setAvailableClasses(res.data || []);
        });

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <View style={styles.container}>
            <MultiSelect
                label="Raça"
                options={availableRaces}
                selectedIds={selectedRaceIds}
                onChange={setSelectedRaceIds}
                placeholder="Selecione uma ou mais raças"
            />

            <MultiSelect
                label="Classe"
                options={availableClasses}
                selectedIds={selectedClassIds}
                onChange={setSelectedClassIds}
                placeholder="Selecione uma ou mais classes"
            />

            <FormInput label="Origem" placeholder="Órfão" />
            <FormInput label="Kits" placeholder="Artesão" />
            <FormInput label="Magias/Truques" placeholder="Chama Sagrada" />
            <FormInput label="Idiomas" placeholder="Dracônico" />
            <FormInput label="Teste de resistência" placeholder="For, Int, Car" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: "100%", gap: 12 }
});

export default RaceClassTab;
