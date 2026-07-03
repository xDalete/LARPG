-- 1. Tabela de Campanhas (Mesa de RPG)
CREATE TABLE public.campanhas (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    name text NOT NULL,
    description text,
    is_master boolean DEFAULT false NOT NULL,
    avatar jsonb DEFAULT '{"uri": "https://cdn.discordapp.com/attachments/1404178863378141361/1508948339390025738/image.png", "averageColor": "#5f3b16"}'::jsonb NOT NULL
);

-- Habilitar leitura pública (opcional para testes)
ALTER TABLE public.campanhas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública campanhas" ON public.campanhas FOR SELECT USING (true);
CREATE POLICY "Escrita pública campanhas" ON public.campanhas FOR INSERT WITH CHECK (true);

-- Inserir mesas mockadas padrão para testar
INSERT INTO public.campanhas (name, description, is_master, avatar) VALUES 
('Sussurro das Cinzas', 'Jornada épica por um mundo onde o destino é moldado por forças misteriosas.', true, '{"uri": "https://cdn.discordapp.com/attachments/1404178863378141361/1508948339390025738/image.png", "averageColor": "#5f3b16"}'),
('Ventos do Destino', 'Explore mistérios, forme alianças e descubra segredos perdidos.', false, '{"uri": "https://cdn.discordapp.com/attachments/1404178863378141361/1508948425926774945/image.png", "averageColor": "#4d1c06"}');


-- 2. Tabela de Personagens (Fichas de D&D)
CREATE TABLE public.personagens (
    id text PRIMARY KEY, -- Usamos text para permitir UUIDs ou strings randômicas geradas no front
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    nome text NOT NULL,
    descricao text,
    avatar jsonb NOT NULL,
    level integer DEFAULT 1 NOT NULL,
    vida_atual integer NOT NULL,
    vida_max integer NOT NULL,
    
    -- Campos detalhados da ficha
    alinhamentos jsonb,
    historia text,
    ouro text DEFAULT '0',
    prata text DEFAULT '0',
    bronze text DEFAULT '0',
    atributos jsonb,
    iniciativa text,
    classe_armadura text,
    deslocamento text,
    selected_race_ids jsonb,
    selected_class_ids jsonb,
    selected_origins jsonb,
    selected_kits jsonb,
    selected_spells jsonb,
    selected_languages jsonb,
    selected_saving_throws jsonb,
    selected_class_proficiencies jsonb
);

-- Habilitar leitura/escrita pública para testes locais rápidos
ALTER TABLE public.personagens ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acesso público personagens" ON public.personagens FOR ALL USING (true) WITH CHECK (true);
