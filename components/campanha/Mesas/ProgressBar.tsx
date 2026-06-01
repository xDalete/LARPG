import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/common/ThemedText";


type TipoBarra = "vida" | "mana" | "outro";


const coresPadroes: Record<TipoBarra, string> = {
  vida: "#e53935",    
  mana: "#2196F3",      
  outro: "#4caf50",     
};

interface PropriedadesProgressBar {
  current: number;
  max: number;
  tipo?: TipoBarra;           
  color?: string;            
  label?: string;
  showText?: boolean;
}

export const ProgressBar = ({
  current,
  max,
  tipo = "outro",             
  color,                    
  label,
  showText = true,
}: PropriedadesProgressBar) => {
  const corFinal = color || coresPadroes[tipo];
  
  const percentual = (current / max) * 100;

  return (
    <View style={estilos.container}>
      {label && <ThemedText style={estilos.rotulo}>{label}</ThemedText>}

      <View style={estilos.containerBarra}>
        <View
          style={[
            estilos.barra,
            {
              width: `${percentual}%`,
              backgroundColor: corFinal, 
            },
          ]}
        />
      </View>

      {showText && (
        <ThemedText style={estilos.texto}>
          {current} / {max}
        </ThemedText>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({

  container: {
    width: "100%",
    marginVertical: 12,
  },

  rotulo: {
    fontSize: 12,
    color: "#a0a8b8",
    marginBottom: 6,
    letterSpacing: 0.5,
  },

  containerBarra: {
    height: 24,
    backgroundColor: "#0f1620",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.6)",
  },

  barra: {
    height: "100%",
    borderRadius: 10,
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.6)",
  },

  texto: {
    fontSize: 12,
    color: "#a0a8b8",
    textAlign: "center",
    marginTop: 6,
  },
});