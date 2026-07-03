import { getRaces } from "./RacaApi";
import { getClasses } from "./ClassApi";
import { getOrigins } from "./OrigemApi";
import { getKits } from "./KitApi";
import { getSpells } from "./MagiaApi";
import { getLanguages } from "./IdiomaApi";
import { getSavingThrows } from "./TesteResistenciaApi";
import { getClassProficiencies } from "./PericiaApi";

export type DropdownItemType = { id: string; nome: string };

export type FichaMetadados = {
    races: DropdownItemType[];
    classes: DropdownItemType[];
    origins: DropdownItemType[];
    kits: DropdownItemType[];
    spells: DropdownItemType[];
    languages: DropdownItemType[];
    savingThrows: DropdownItemType[];
    proficiencies: DropdownItemType[];
};

export async function getFichaMetadados(): Promise<{ data: FichaMetadados }> {

    const [
        resultadoRaças,
        resultadoClasses,
        resultadoOrigens,
        resultadoKits,
        resultadoMagias,
        resultadoIdiomas,
        resultadoTestes,
        resultadoPericias
    ] = await Promise.all([
        getRaces(),
        getClasses(),
        getOrigins(),
        getKits(),
        getSpells(),
        getLanguages(),
        getSavingThrows(),
        getClassProficiencies()
    ]);

    return {
        data: {
            races: (resultadoRaças.data || []).map((raça) => ({ id: raça.id, nome: raça.nome })),
            classes: (resultadoClasses.data || []).map((classe) => ({ id: classe.id, nome: classe.nome })),
            origins: (resultadoOrigens.data || []).map((origem) => ({ id: origem.id, nome: origem.nome })),
            kits: (resultadoKits.data || []).map((kit) => ({ id: kit.id, nome: kit.nome })),
            spells: (resultadoMagias.data || []).map((magia) => ({ id: magia.id, nome: magia.nome })),
            languages: (resultadoIdiomas.data || []).map((idioma) => ({ id: idioma.id, nome: idioma.nome })),
            savingThrows: (resultadoTestes.data || []).map((teste) => ({ id: teste.id, nome: teste.nome })),
            proficiencies: (resultadoPericias.data || []).map((pericia) => ({ id: pericia.id, nome: pericia.nome }))
        }
    };
}
