# Boreal Club - Next.js

Este projeto foi migrado de React (Vite) para Next.js, mantendo toda a funcionalidade e design originais.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.3.5** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
boreal-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout raiz
│   │   ├── page.tsx         # Página principal
│   │   ├── loading.tsx      # Componente de loading
│   │   └── not-found.tsx    # Página 404
│   ├── components/
│   │   ├── ui/              # Componentes UI (Radix)
│   │   ├── GlassButton.tsx  # Botão com efeito glass
│   │   ├── GlassCard.tsx    # Card com efeito glass
│   │   ├── ParticleBackground.tsx
│   │   └── AuroraBackground.tsx
│   ├── lib/
│   │   └── utils.js         # Utilitários
│   └── hooks/
│       └── use-mobile.js    # Hook para detectar mobile
├── public/
│   └── assets/
│       ├── hero-bg.jpg      # Imagem de fundo do hero
│       └── vinyl-record.jpg # Imagem do disco de vinil
├── next.config.ts           # Configuração do Next.js
├── tailwind.config.ts       # Configuração do Tailwind
└── tsconfig.json           # Configuração do TypeScript
```

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Executar build de produção
npm start

# Verificar código (ESLint)
npm run lint
```

## 🎨 Principais Melhorias da Migração

### ✅ Otimizações do Next.js
- **App Router** - Roteamento moderno do Next.js 13+
- **Server Components** - Renderização no servidor
- **Otimização de imagens** - Carregamento otimizado
- **Metadados SEO** - Meta tags configuradas
- **Headers de segurança** - Configurações de segurança

### ✅ Performance
- **Compressão automática** - Arquivos comprimidos
- **Code splitting** - Divisão automática do código
- **Lazy loading** - Carregamento sob demanda
- **Otimização de CSS** - CSS otimizado para produção

### ✅ Desenvolvimento
- **TypeScript** - Tipagem completa
- **ESLint** - Linting configurado
- **Hot reload** - Recarregamento automático
- **Error boundaries** - Tratamento de erros

## 🌐 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte Next.js:

- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎵 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Animações com Framer Motion
- ✅ Efeitos glassmorphism
- ✅ Background de partículas animadas
- ✅ Design neon/cyberpunk
- ✅ **Contador regressivo em tempo real** 🆕
- ✅ **Promoção de ingressos com desconto** 🆕
- ✅ Cards de DJs interativos
- ✅ Seção de ingressos
- ✅ Informações de localização
- ✅ Footer com redes sociais

## 🕒 Contador Regressivo

O novo componente `CountdownTimer` inclui:

- **Contagem regressiva em tempo real** até o evento (15 de Agosto, 2025)
- **Promoção Early Bird** com desconto de 25% (R$ 200 → R$ 150)
- **Animações dinâmicas** nos números que mudam
- **Call-to-action destacado** para compra de ingressos
- **Design responsivo** que se adapta a todos os dispositivos
- **Indicador de economia** mostrando o valor poupado

### Características do Contador:
- Atualização automática a cada segundo
- Exibição de dias, horas, minutos e segundos
- Efeitos visuais com glassmorphism
- Integração perfeita com o design existente
- Mensagem especial quando o evento começar

## 🔧 Configurações Personalizadas

### Tailwind CSS
- Paleta de cores personalizada (tema Boreal)
- Variáveis CSS customizadas
- Efeitos glassmorphism
- Animações personalizadas

### Next.js
- Headers de segurança configurados
- Otimização de imagens habilitada
- Compressão automática
- Configurações de build otimizadas

## 📄 Licença

Este projeto é propriedade do Boreal Club. Todos os direitos reservados.

