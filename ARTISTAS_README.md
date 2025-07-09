# Artistas da Casa - Boreal Club

## Estrutura de Páginas

### Páginas Criadas

1. **Página Principal dos Artistas** (`/artistas`)

   - Lista todos os artistas da casa
   - Seção de destaques
   - Links para redes sociais
   - Navegação para páginas individuais

2. **Páginas Individuais dos Artistas** (`/artistas/[artist]`)
   - Páginas dinâmicas para cada DJ
   - Metadados específicos para compartilhamento social
   - Informações completas do artista
   - Botões de compartilhamento

### Artistas Disponíveis

- **DJ AURORA** (`/artistas/dj-aurora`) - Progressive House
- **NEON BEATS** (`/artistas/neon-beats`) - Techno
- **CYBER WAVE** (`/artistas/cyber-wave`) - Synthwave
- **ELECTRIC SOUL** (`/artistas/electric-soul`) - Deep House
- **DIGITAL DREAMS** (`/artistas/digital-dreams`) - Trance
- **BASS GALAXY** (`/artistas/bass-galaxy`) - Dubstep

## Metadados para Compartilhamento Social

### Open Graph

- Título personalizado para cada artista
- Descrição específica
- Imagem dedicada (1200x630px)
- URL canônica

### Twitter Cards

- Card de imagem grande
- Título e descrição otimizados
- Imagem específica do artista

### WhatsApp/Instagram

- Metadados otimizados para visualização
- Descrições atrativas
- Imagens de alta qualidade

## Funcionalidades

### Componentes Criados

1. **ShareButtons** (`/components/ShareButtons.tsx`)

   - Compartilhamento nativo (Web Share API)
   - Botões específicos para redes sociais
   - Copiar link para clipboard
   - Feedback visual

2. **Layout dos Artistas** (`/app/artistas/layout.tsx`)
   - Metadados globais
   - Template de título dinâmico
   - Configurações de SEO

### Seção na Página Principal

- Seção "Artistas da Casa" adicionada
- Cards dos artistas em destaque
- Link para página completa dos artistas
- Navegação atualizada

## Estrutura de Dados

Cada artista possui:

```typescript
{
  id: string;
  name: string;
  realName: string;
  genre: string;
  bio: string;
  longBio: string;
  image: string;
  instagram: string;
  youtube: string;
  soundcloud: string;
  spotify: string;
  nextShow: {
    date: string;
    time: string;
    venue: string;
    location: string;
  }
  stats: {
    followers: string;
    shows: string;
    countries: string;
    years: string;
  }
  tracks: Array<{
    title: string;
    duration: string;
    genre: string;
    year: string;
  }>;
}
```

## URLs de Compartilhamento

### Instagram

- Metadados otimizados para stories e posts
- Imagens em formato 1:1 e 16:9
- Descrições atrativas

### WhatsApp

- Preview rico com imagem e descrição
- Título chamativo
- URL amigável

### Facebook/Twitter

- Cards de imagem grandes
- Metadados completos
- Compartilhamento direto

## Como Adicionar Novos Artistas

1. Adicionar dados do artista em `artistsData`
2. Criar imagem do artista em `/public/assets/artists/`
3. Criar imagem OG em `/public/assets/artists/[artist-id]-og.jpg`
4. Atualizar lista na página principal se necessário

## SEO e Performance

- Metadados otimizados para cada artista
- URLs amigáveis e semânticas
- Imagens otimizadas para redes sociais
- Carregamento dinâmico de conteúdo
- Animações suaves com Framer Motion
