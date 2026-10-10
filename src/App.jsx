import { 
  Sun, 
  BatteryCharging, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Layers, 
  PhoneCall,
  CheckCircle2,
  TrendingDown,
  Leaf,
  MessageCircle
} from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [energyBill, setEnergyBill] = useState(650);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoImovel: 'Residência / Condomínio',
    mensagem: ''
  });

  const WHATSAPP_NUMBER = '5561985964802';

  // Services matching the exact design structure
  const baseUrl = import.meta.env.BASE_URL;
  const services = [
    {
      id: 1,
      title: 'Sistemas Solares Fotovoltaicos',
      shortTitle: 'Solar systems',
      image: `${baseUrl}solar_installation.jpg`,
      badge: 'Geração Alta Eficiência',
      description: 'Projetamos e instalamos módulos fotovoltaicos premium de alta performance, otimizados para máxima captação solar e durabilidade estrutural mesmo em condições extremas de calor e umidade.',
      details: ['Células monocristalinas Tier 1', 'Garantia de geração de 25 anos', 'Estrutura aerodinâmica anticorrosiva']
    },
    {
      id: 2,
      title: 'Baterias Híbridas de Armazenamento',
      shortTitle: 'Hybrid batteries',
      image: `${baseUrl}battery_system.jpg`,
      badge: 'Autonomia 24/7',
      description: 'Bancos de baterias inteligentes de lítio ferro fosfato (LiFePO4) que armazenam o excedente diurno para alimentar sua residência à noite e garantir energia ininterrupta contra oscilações e apagões.',
      details: ['Ciclos ultra duradouros (>6000 ciclos)', 'Troca de carga em menos de 10ms', 'Design discreto e seguro indoor/outdoor']
    },
    {
      id: 3,
      title: 'EMS & Gestão Inteligente de Energia',
      shortTitle: 'EMS & smart homes',
      image: `${baseUrl}ems_system.jpg`,
      badge: 'Controle em Tempo Real',
      description: 'Sistema operacional centralizado com algoritmos preditivos de IA que equilibra automaticamente consumo, recarga de bateria e exportação à rede para minimizar seus custos ao máximo.',
      details: ['App móvel com telemetria ao vivo', 'Previsão solar baseada em clima', 'Integração com automação residencial']
    },
    {
      id: 4,
      title: 'Estações de Carregamento Veicular (EV)',
      shortTitle: 'EV charging',
      image: `${baseUrl}ev_charging.jpg`,
      badge: 'Mobilidade Verde',
      description: 'Wallboxes e eletropostos inteligentes integrados diretamente à geração fotovoltaica, permitindo abastecer veículos elétricos e híbridos 100% com energia limpa captada pelo próprio telhado.',
      details: ['Carregamento rápido Nível 2 até 22kW', 'Sincronização com excedente solar', 'Compatibilidade universal Tipo 2']
    },
    {
      id: 5,
      title: 'Integração Turnkey & Engenharia Completa',
      shortTitle: 'Turnkey integration',
      image: `${baseUrl}turnkey_team.jpg`,
      badge: 'Solução de Ponta a Ponta',
      description: 'Cuidamos de tudo: análise de viabilidade técnica, projeto elétrico civil, homologação formal junto à concessionária de energia, comissionamento e manutenção preventiva contínua.',
      details: ['Homologação técnica regulamentar', 'Monitoramento ativo de saúde do sistema', 'Suporte técnico especializado']
    }
  ];

  // Calculate savings based on bill
  const annualSavings = Math.round(energyBill * 0.92 * 12);
  const co2Reduction = (energyBill * 0.05 * 12).toFixed(1);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);

    // Format message for WhatsApp
    const message = 
      `*Olá, EnergiaLimpa! Gostaria de solicitar um estudo de energia solar:*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📱 *Telefone:* ${formData.telefone}\n` +
      `🏠 *Tipo de Imóvel:* ${formData.tipoImovel}\n` +
      `💬 *Mensagem/Detalhes:* ${formData.mensagem || 'Gostaria de mais informações sobre viabilidade e economia.'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setContactSubmitted(false);
    }, 6000);
  };

  return (
    <div className="app-viewport">
      {/* Top Header */}
      <header className="site-header">
        <a href="#hero" className="brand-wrapper">
          <div className="brand-logo-icon">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 4C18 11.732 11.732 18 4 18C11.732 18 18 24.268 18 32C18 24.268 24.268 18 32 18C24.268 18 18 11.732 18 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="18" cy="18" r="3.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="brand-title">EnergiaLimpa</span>
        </a>

        <nav className="nav-links-desktop">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#servicos" className="nav-link">Soluções</a>
          <a href="#pilares" className="nav-link">Diferenciais</a>
          <a href="#simulador" className="nav-link">Simulador Solar</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        <div className="header-right">
          <a href="#simulador" className="btn-header-cta">
            Calcular Economia
          </a>
          <button 
            type="button" 
            className="btn-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-wrapper">
            <span className="brand-title">EnergiaLimpa</span>
          </div>
          <button 
            type="button" 
            className="btn-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar Menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="drawer-nav">
          <a href="#sobre" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="#servicos" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
          <a href="#pilares" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
          <a href="#simulador" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Simulador Solar</a>
          <a href="#contato" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Fale com Especialistas</a>
        </nav>
        <div className="drawer-footer">
          <a 
            href="#simulador" 
            className="btn-primary-solar" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Calcular Economia
          </a>
        </div>
      </div>

      {/* Hero Section with Video Background */}
      <section id="hero" className="hero-section">
        <video 
          className="hero-video-bg"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={`${baseUrl}solar_hero_clean.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay-gradient"></div>

        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={14} />
            <span>Ecossistema Energético Solar & Armazenamento</span>
          </div>

          <h1 className="hero-title">
            Energia solar inteligente para o futuro da sua vida
          </h1>

          <p className="hero-description">
            O lar e a empresa ideal combinam geração solar fotovoltaica de alta eficiência, armazenamento em baterias e controle inteligente, onde todos os sistemas atuam em perfeita harmonia.
          </p>

          <div className="hero-actions">
            <a href="#simulador" className="btn-primary-solar">
              <span>Simular Meu Projeto</span>
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="btn-secondary-solar">
              <span>Explorar Soluções</span>
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value">Até 95%</span>
              <span className="metric-label">Redução na conta de luz</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">25 Anos</span>
              <span className="metric-label">Garantia de geração solar</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">100% Limpa</span>
              <span className="metric-label">Zero emissão de carbono</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Blueprint Architecture & Philosophy */}
      <section id="sobre" className="blueprint-section">
        <div className="blueprint-header">
          <div>
            <span className="section-label">• Sobre a Plataforma</span>
            <h2 className="section-heading">Arquitetura integrada de microgeração solar e autossuficiência</h2>
          </div>
          <p className="section-subtext">
            Engenharia de precisão que converte radiação solar em fluxo elétrico limpo, estabilizado em baterias e distribuído sob demanda.
          </p>
        </div>

        <div className="blueprint-canvas-container">
          <div className="blueprint-grid-overlay"></div>
          <img 
            src={`${baseUrl}blueprint_pure_solar.png`} 
            alt="Arquitetura de Engenharia de Energia Solar Fotovoltaica e Baterias" 
            className="blueprint-image"
          />
        </div>

        <div className="blueprint-footer">
          <h3 className="philosophy-title">
            Uma união de engenheiros, designers e visionários. Acreditamos que a luz pode ser inteligente.
          </h3>
          <div>
            <p className="philosophy-desc">
              Nosso propósito é desenhar a transição energética definitiva: combinar a potência natural com hardware robusto e software intuitivo, entregando liberdade e segurança energética real.
            </p>
            <p className="philosophy-quote">
              "EnergiaLimpa": gerando autonomia energética, prosperidade e preservação ambiental para as próximas gerações.
            </p>
          </div>
        </div>
      </section>

      {/* EV Banner Section */}
      <section className="ev-showcase-section">
        <img 
          src={`${baseUrl}ev_charging.jpg`} 
          alt="Carregamento de Veículo Elétrico com Energia Solar" 
          className="ev-image"
        />
        <div className="ev-overlay-badge">
          <h4 className="ev-badge-title">Mobilidade 100% Solar & Descarbonizada</h4>
          <p className="ev-badge-text">
            Abasteça seu veículo elétrico utilizando a energia solar captada durante o dia, eliminando despesas de combustível fóssil e tarifas de pico.
          </p>
        </div>
      </section>

      {/* Section 3: Interactive Services (What We Do) */}
      <section id="servicos" className="services-section">
        <span className="section-label">• Nossas Soluções</span>
        <h2 className="section-heading">O que fazemos</h2>

        <div className="services-layout">
          <div className="services-visual-container">
            <span className="services-visual-badge">
              <CheckCircle2 size={14} />
              {services[activeService].badge}
            </span>
            <img 
              src={services[activeService].image} 
              alt={services[activeService].title} 
              className="services-image"
            />
          </div>

          <div className="services-list">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div 
                  key={service.id} 
                  className={`service-tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="service-tab-header">
                    <div className="service-tab-num-title">
                      <span className="service-tab-num">{service.id}</span>
                      <span className="service-tab-name">{service.title}</span>
                    </div>
                    <ArrowRight size={18} color={isActive ? '#0f172a' : '#cbd5e1'} />
                  </div>

                  {isActive && (
                    <div className="service-tab-body">
                      <p>{service.description}</p>
                      <ul style={{ marginTop: '12px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
                            <Leaf size={14} color="#10b981" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="services-action-bar">
              <a href="#contato" className="btn-contact-services">
                <span>Fale Conosco</span>
              </a>
              <a href="#contato" className="btn-arrow-square" aria-label="Acessar contato">
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why EnergiaLimpa - 4 Pillars */}
      <section id="pilares" className="pillars-section">
        <span className="section-label">• Por Que a EnergiaLimpa</span>
        <h2 className="section-heading">Para nós, não existem detalhes secundários</h2>

        <div className="pillars-grid">
          <div className="pillars-cards">
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <h3 className="pillar-title">Precisão Técnica</h3>
              <p className="pillar-desc">
                Analisamos minuciosamente o perfil de consumo, a arquitetura física e a incidência solar geoespacial de cada imóvel para definir a engenharia exata.
              </p>
            </div>

            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <h3 className="pillar-title">Responsabilidade</h3>
              <p className="pillar-desc">
                Nossa atuação baseia-se em integridade absoluta e transparência. Da homologação até a supervisão técnica, acompanhamos o desempenho contínuo.
              </p>
            </div>

            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <h3 className="pillar-title">Estética Arquitetônica</h3>
              <p className="pillar-desc">
                Criamos sistemas que não apenas geram máxima energia, mas preservam e valorizam a linguagem visual moderna da sua residência ou empresa.
              </p>
            </div>

            <div className="pillar-card">
              <span className="pillar-num">04</span>
              <h3 className="pillar-title">Individualidade</h3>
              <p className="pillar-desc">
                Soluções sob medida desenhadas para o seu estilo de vida presente e preparadas para a expansão de veículos elétricos e automações futuras.
              </p>
            </div>
          </div>

          <div className="pillars-visual">
            <img 
              src={`${baseUrl}battery_system.jpg`} 
              alt="Módulos de Bateria e Inversor Solar Integrados" 
              className="pillars-img"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Solar Savings Calculator */}
      <section id="simulador" className="calculator-section">
        <div className="calc-box">
          <div>
            <span className="section-label" style={{ color: '#34d399' }}>• Simulador de Viabilidade</span>
            <h2 className="calc-title">Descubra quanto você pode economizar</h2>
            <p className="calc-desc">
              Arraste o valor médio da sua fatura mensal de eletricidade para projetar sua economia anual estimada e seu impacto ecológico positivo imediato.
            </p>

            <div className="calc-slider-wrapper">
              <div className="calc-slider-label">
                <span>Valor médio mensal da conta</span>
                <strong style={{ fontSize: '18px', color: '#10b981' }}>
                  R$ {energyBill.toLocaleString('pt-BR')}
                </strong>
              </div>
              <input 
                type="range" 
                min="200" 
                max="5000" 
                step="50"
                value={energyBill}
                onChange={(e) => setEnergyBill(Number(e.target.value))}
                className="calc-slider"
              />
            </div>
          </div>

          <div className="calc-results">
            <div className="calc-result-item">
              <span className="calc-res-label">Economia Estimada por Ano</span>
              <span className="calc-res-val">R$ {annualSavings.toLocaleString('pt-BR')}</span>
            </div>
            <div className="calc-result-item">
              <span className="calc-res-label">Redução de Emissão CO₂/ano</span>
              <span className="calc-res-val">{co2Reduction} ton</span>
            </div>
            <div className="calc-result-item">
              <span className="calc-res-label">Retorno Médio do Investimento</span>
              <span className="calc-res-val" style={{ color: '#38bdf8' }}>~ 3 a 4 anos</span>
            </div>
            <a href="#contato" className="btn-primary-solar" style={{ marginTop: '12px', justifyContent: 'center' }}>
              Solicitar Estudo Gratuito
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Contact & Quotation Form */}
      <section id="contato" className="contact-section">
        <div className="contact-grid">
          <div className="contact-info-col">
            <span className="section-label">• Contato & Consultoria</span>
            <h2 className="section-heading">Vamos transformar a forma como você consome energia</h2>
            <p className="section-subtext" style={{ marginTop: '16px' }}>
              Entre em contato com nossos especialistas em energia renovável para receber um dimensionamento personalizado sem compromisso.
            </p>

            <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="contact-benefit-card">
                <div className="contact-benefit-icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#0f172a', fontWeight: 700, marginBottom: '2px' }}>Garantia de Performance</h4>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Equipamentos de padrão industrial testados e homologados pelos órgãos reguladores.</p>
                </div>
              </div>

              <div className="contact-benefit-card">
                <div className="contact-benefit-icon">
                  <TrendingDown size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#0f172a', fontWeight: 700, marginBottom: '2px' }}>Blindagem Tarifária</h4>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Fique protegido contra aumentos abusivos, escassez hídrica e bandeiras tarifárias.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            {contactSubmitted && (
              <div className="form-alert-success">
                <CheckCircle2 size={18} color="#10b981" />
                <span>✓ Solicitação enviada! Abrindo seu WhatsApp para atendimento direto...</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Nome Completo</label>
              <input 
                type="text" 
                required 
                placeholder="Ex.: Carolina Silva" 
                className="form-input"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">E-mail Corporativo ou Pessoal</label>
              <input 
                type="email" 
                required 
                placeholder="carolina@exemplo.com.br" 
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telefone / WhatsApp</label>
              <input 
                type="tel" 
                required 
                placeholder="(61) 98596-4802" 
                className="form-input"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tipo de Imóvel</label>
              <select 
                className="form-select" 
                value={formData.tipoImovel}
                onChange={(e) => setFormData({ ...formData, tipoImovel: e.target.value })}
              >
                <option value="Residência / Condomínio">Residência / Condomínio</option>
                <option value="Comércio / Escritório">Comércio / Escritório</option>
                <option value="Indústria / Galpão">Indústria / Galpão</option>
                <option value="Propriedade Rural">Propriedade Rural</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Mensagem ou Observações (Opcional)</label>
              <textarea 
                rows="3" 
                placeholder="Conte-nos se você já possui veículo elétrico ou interesse em baterias..."
                className="form-textarea"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-form" style={{ backgroundColor: '#25D366', color: '#ffffff' }}>
              <MessageCircle size={20} />
              <span>Enviar via WhatsApp (61 98596-4802)</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">EnergiaLimpa</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Pioneirismo em soluções de energia limpa, independência tarifária e mobilidade sustentável de última geração.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', marginBottom: '12px', fontWeight: 600 }}>Navegação</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <a href="#hero" style={{ color: '#94a3b8', textDecoration: 'none' }}>Início</a>
              <a href="#sobre" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sobre a Arquitetura</a>
              <a href="#servicos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Nossas Soluções</a>
              <a href="#pilares" style={{ color: '#94a3b8', textDecoration: 'none' }}>Por que EnergiaLimpa</a>
              <a href="#simulador" style={{ color: '#94a3b8', textDecoration: 'none' }}>Simulador de Economia</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', marginBottom: '12px', fontWeight: 600 }}>Tecnologia</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <span>Painéis Fotovoltaicos Tier 1</span>
              <span>Baterias LiFePO4 de Armazenamento</span>
              <span>Wallboxes Veiculares Inteligentes</span>
              <span>EMS & Smart Home Gateway</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EnergiaLimpa Renewable Energy. Todos os direitos reservados.</p>
          <p>Projeto Integrador - Técnico em Desenvolvimento de Sistemas | Senac</p>
        </div>
      </footer>
    </div>
  );
}
