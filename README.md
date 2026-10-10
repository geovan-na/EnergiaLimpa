# EnergiaLimpa - Landing Page de Energia Solar e Renovável

## Identificação Acadêmica

* **Instituição de Ensino:** Senac
* **Curso:** Técnico em Desenvolvimento de Sistemas
* **Disciplina:** Projeto Integrador
* **Orientador:** Profº Hudson Neves

---

## Descrição do Projeto

O **EnergiaLimpa** é uma Landing Page moderna, de alta performance e totalmente responsiva voltada para a conscientização, demonstração e simulação de ecossistemas integrados de energia solar fotovoltaica e energias renováveis. 

Inspirada em referências internacionais de excelência em UI/UX e design de sistemas solares de alto padrão, a aplicação integra vídeo de fundo realista e fluído, esquemas arquiteturais de microgeração, apresentação de hardware sustentável (geração solar, bancos de baterias inteligentes LiFePO4, carregadores veiculares EV e gestão preditiva de consumo) e um simulador financeiro interativo de economia na conta de luz.

---

## Objetivos

### Objetivo Geral
Desenvolver uma aplicação web responsiva que sirva como plataforma de atração e engajamento para soluções de transição energética sustentável, unindo design de ponta, engenharia fotovoltaica e simulação interativa de retorno financeiro e ecológico.

### Objetivos Específicos
* Apresentar o conceito de ecossistema integrado de energia limpa (solar + bateria híbrida + mobilidade elétrica + EMS).
* Proporcionar uma experiência visual imersiva e natural por meio de vídeo e diagramação arquitetural detalhada.
* Disponibilizar uma calculadora/simulador em tempo real para estimativa de economia anual na fatura de energia e redução de emissões de CO₂.
* Capturar dados de clientes interessados através de formulário estruturado de solicitação de estudos técnicos de viabilidade.
* Garantir fidelidade de layout e adaptabilidade responsiva perfeita entre dispositivos desktop, tablets e smartphones.

---

## Problema que o Sistema Resolve

O setor de energia solar frequentemente sofre com sites com visual desatualizado, mensagens excessivamente complexas ou interfaces estáticas que não comunicam o valor estético e a confiabilidade de instalações modernas. O projeto **EnergiaLimpa** resolve esses gargalos ao:
1. Desmistificar a integração entre painéis solares, armazenamento em baterias e carregamento veicular (EV).
2. Facilitar o entendimento imediato do retorno sobre o investimento (ROI) através de um simulador dinâmico.
3. Transmitir credibilidade e sofisticação visual alinhada às melhores práticas contemporâneas de desenvolvimento front-end.

---

## Público-alvo

* Proprietários residenciais em busca de redução de despesas elétricas e independência tarifária.
* Condomínios residenciais e comerciais interessados em geração compartilhada e estações de recarga veicular.
* Pequenas e médias empresas buscando previsibilidade orçamentária e metas ESG (Environmental, Social and Governance).
* Entusiastas de mobilidade elétrica e residências inteligentes (*smart homes*).

---

## Principais Funcionalidades

| Funcionalidade | Descrição |
| :--- | :--- |
| **Hero Imersivo com Vídeo** | Apresentação institucional com reprodução de vídeo em loop de alta definição, tipografia imponente e métricas de impacto direto. |
| **Diagrama de Arquitetura de Microgeração** | Seção inspirada em plantas técnicas demonstrando a interligação entre painéis fotovoltaicos, banco de baterias LiFePO4 e hubs de controle central. |
| **Showcase de Mobilidade Elétrica (EV)** | Destaque visual para estações de carregamento veicular integradas à geração própria de energia. |
| **Catálogo Interativo de Soluções (Abas Dinâmicas)** | Navegação fluida entre os 5 pilares de produto (Sistemas Solares, Baterias Híbridas, EMS & Smart Homes, EV Charging e Integração Turnkey). |
| **Diferenciais e Filosofia de Engenharia** | Exposição dos 4 pilares: Precisão Técnica, Responsabilidade, Estética Arquitetônica e Individualidade. |
| **Simulador de Viabilidade Financeira** | Barra deslizante interativa que projeta a economia anual em Reais (R$) e a redução de carbono (toneladas de CO₂) em tempo real. |
| **Formulário de Orçamento / Consultoria** | Coleta estruturada de dados de contato, tipologia do imóvel e mensagem para atendimento personalizado. |
| **Menu Responsivo & Drawer Mobile** | Navegação otimizada para telas sensíveis ao toque com menu lateral deslizante e rolagem suave para âncoras da página. |

---

## Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Biblioteca Principal:** [React 19](https://react.dev/)
* **Ferramenta de Build e Bundler:** [Vite](https://vite.dev/)
* **Estilização:** CSS3 Moderno (Custom Properties / Design Tokens, Flexbox, Grid, Backdrop Filter, Keyframe Animations)
* **Biblioteca de Ícones:** [Lucide React](https://lucide.dev/)
* **Controle de Versão:** Git e GitHub

---

## Arquitetura da Solução

O sistema foi estruturado seguindo o padrão de aplicação em página única (**Single Page Application - SPA**), com arquitetura baseada em componentes reativos:

```
                  +-----------------------------------+
                  |            index.html             |
                  +-----------------+-----------------+
                                    |
                  +-----------------v-----------------+
                  |             main.jsx              |
                  +-----------------+-----------------+
                                    |
                  +-----------------v-----------------+
                  |             App.jsx               |
                  | (Estado de Menu, Abas, Simulador) |
                  +-----------------+-----------------+
                                    |
       +----------------------------+----------------------------+
       |              |             |              |             |
+------v------+ +-----v-----+ +-----v------+ +-----v------+ +-----v-----+
| SiteHeader  | | HeroView  | | Blueprint  | | Services   | | Calculator|
| (Desktop &  | | (Vídeo &  | | & Filos.   | | (Abas      | | & Contact |
| Drawer Mob) | | Métricas) | | Diagram)   | | Dinâmicas) | | Form      |
+-------------+ +-----------+ +------------+ +------------+ +-----------+
```

---

## Modelagem do Banco de Dados (se houver)

*Não aplicável (A ser definido pela equipe em fases futuras de integração com API backend e banco de dados).*

---

## Requisitos para Execução

* **Node.js:** Versão 18.0.0 ou superior (recomendado Node 20 LTS ou superior)
* **Gerenciador de Pacotes:** npm (v9+) ou yarn / pnpm
* **Navegador Web:** Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari atualizados

---

## Passo a Passo para Instalação

1. Clone o repositório em seu ambiente local:
```bash
git clone https://github.com/geovan-na/EnergiaLimpa.git
```

2. Acesse a pasta do projeto:
```bash
cd EnergiaLimpa
```

3. Instale as dependências do projeto via npm:
```bash
npm install
```

---

## Como Executar o Projeto

### Ambiente de Desenvolvimento
Para iniciar o servidor local de desenvolvimento com Hot Module Replacement (HMR):
```bash
npm run dev
```
Após executar o comando, abra seu navegador no endereço indicado (geralmente `http://localhost:5173/`).

### Geração de Build de Produção
Para compilar e otimizar os arquivos estáticos para publicação:
```bash
npm run build
```
Os arquivos prontos para deploy serão gerados no diretório `dist/`.

### Visualização do Build
Para testar localmente os arquivos gerados no diretório de build:
```bash
npm run preview
```

---

## Estrutura do Projeto

```
EnergiaLimpa/
├── public/
│   ├── battery_system.png          # Fotografia de bateria residencial de armazenamento
│   ├── blueprint_clean_nologo.png  # Diagrama arquitetural de microgeração
│   ├── ev_charging.png             # Imagem de carregador veicular inteligente
│   ├── hero_bg.mp4                 # Vídeo de fundo em alta definição da seção Hero
│   └── solar_installation.png      # Módulo solar fotovoltaico em residência
├── src/
│   ├── assets/                     # Recursos gráficos e logos secundários
│   ├── App.css                     # Folha de estilos responsiva da aplicação
│   ├── App.jsx                     # Componente principal contendo as seções e estados
│   ├── index.css                   # Tokens de cores, tipografia global e resets
│   └── main.jsx                    # Ponto de entrada e renderização do React DOM
├── index.html                      # Documento HTML raiz e fontes Google Fonts
├── package.json                    # Dependências, metadados e scripts de execução
├── vite.config.js                  # Configurações do Vite e plugins
└── README.md                       # Documentação técnica completa
```

---

## Exemplos de Uso

1. **Navegação por Soluções Técnicas:** O usuário clica nos itens enumerados (1 a 5) da seção "O que fazemos" para alternar dinamicamente os detalhes técnicos e a imagem correspondente da solução.
2. **Cálculo de Economia Solar:** Ao interagir com o slider da calculadora de viabilidade, o visitante visualiza instantaneamente a economia monetária anual projetada e a redução de emissão de poluentes.
3. **Solicitação de Proposta Comercial:** O visitante preenche o formulário com dados de contato e tipo de imóvel (residencial, comercial, industrial ou rural) para envio de solicitação.

---

## API (quando existir)

*A ser definido pela equipe (Previsão de integração com serviço de envio de e-mails/webhooks e API de tarifas das concessionárias).*

---

## Capturas de Tela

> *Insira as capturas de tela da landing page após a execução local ou publicação:*
>
> 1. **Hero Section com Vídeo de Fundo:** `[Inserir imagem da seção Hero em tela cheia]`
> 2. **Visão da Arquitetura e Engenharia:** `[Inserir imagem do diagrama técnico]`
> 3. **Catálogo de Soluções Interativo:** `[Inserir imagem das abas de produtos]`
> 4. **Simulador de Economia:** `[Inserir imagem do simulador com o slider interativo]`
> 5. **Visualização Mobile:** `[Inserir imagem da experiência responsiva em smartphone]`

---

## Integrantes da Equipe

* Geovanna (Desenvolvedora de Software)
* Demais integrantes: A ser definido pela equipe

---

## Status do Projeto

**Concluído (MVP - Produto Mínimo Viável de Front-end)**

---

## Melhorias Futuras

* [ ] Integração do formulário com backend via Node.js/Express ou serviço Serverless (e-mail e WhatsApp API).
* [ ] Conexão do simulador com APIs de tarifas dinâmicas de energia por estado/distribuidora (Aneel).
* [ ] Implementação de modo escuro/claro (*Dark Mode Toggle*).
* [ ] Internacionalização (i18n) com suporte a múltiplos idiomas.
* [ ] Testes automatizados unitários e de acessibilidade (WCAG 2.1).

---

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para maiores detalhes.
