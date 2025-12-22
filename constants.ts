import { 
  MapPin, Clock, Phone, Mail, Instagram, Facebook, 
  Hammer, FileText, Component, ShieldCheck, Settings, 
  Maximize2, DoorOpen, LayoutGrid, Warehouse, Grip, ArrowRight
} from 'lucide-react';
import { NavItem, ServiceItem, Partner, GalleryImage, Testimonial } from './types';

export const CONTACT_INFO = {
  address: "Rua Madre Beatriz da Silva, 406 - Aristeu Rios, Pouso Alegre - MG",
  hours: "07:30 às 18:00",
  whatsapp_william: "5535984162199",
  whatsapp_felipe: "5535984147331",
  email: "comercial@esquadlumi.com.br",
  instagram: "https://www.instagram.com/esquadlumi/",
  maps: "https://www.google.com/maps/place/Esquad+Lumi+Pouso+Alegre+%7C+Esquadria+de+Alum%C3%ADnio/@-22.247171,-45.933958,14z",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre a Esquad Lumi", href: "/sobre" },
  { 
    label: "Nossos Serviços", 
    href: "/servicos",
    subItems: [
      { label: "Janelas de Alumínio", href: "/servicos" },
      { label: "Portas de Alumínio", href: "/servicos" },
      { label: "Portão Social e Garagem", href: "/servicos" },
      { label: "Ripado", href: "/servicos" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const SPECIALTIES: ServiceItem[] = [
  {
    title: "Montagem e Instalação",
    description: "Nossos especialistas garantem que cada esquadria seja instalada com cuidado, alinhamento perfeito e vedação eficaz.",
    icon: Hammer
  },
  {
    title: "Leitura de Projetos",
    description: "Compreender e traduzir as suas necessidades a partir de plantas arquitetônicas e desenhos técnicos.",
    icon: FileText
  },
  {
    title: "Vidraçaria",
    description: "Oferecemos uma ampla gama de vidros e acessórios para atender às necessidades específicas de segurança e estética.",
    icon: Component
  },
  {
    title: "Desempenho Térmico",
    description: "Nossos produtos são projetados para otimizar o desempenho térmico e acústico, proporcionando conforto.",
    icon: ShieldCheck
  },
  {
    title: "Manutenção",
    description: "Realizar manutenções preventivas e corretivas nas esquadrias instaladas, garantindo funcionamento correto.",
    icon: Settings
  },
  {
    title: "Automatização",
    description: "Implementamos sistemas de automação em esquadrias, permitindo controle remoto e integração inteligente.",
    icon: Maximize2
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Janelas de Alumínio",
    description: "Janelas de correr, pivotantes, basculantes, e maxim-ar, com opções de vidro duplo e laminado.",
    icon: LayoutGrid
  },
  {
    title: "Portas de Alumínio",
    description: "Portas de correr, pivotantes, de giro e de alumínio com vidro, adequadas para ambientes internos e externos.",
    icon: DoorOpen
  },
  {
    title: "Fachadas de Vidro",
    description: "Sistemas de fachada com estrutura de alumínio, incluindo cortinas de vidro e fachadas pele de vidro.",
    icon: Grip
  },
  {
    title: "Portões de Alumínio",
    description: "Portões automáticos, de correr, pivotantes ou articulados, projetados para garantir segurança.",
    icon: Warehouse
  },
  {
    title: "Pergolados",
    description: "Estruturas de pergolados com acabamentos em alumínio, oferecendo proteção e elegância.",
    icon: LayoutGrid
  },
  {
    title: "Corrimãos",
    description: "Sistemas de segurança para varandas, escadas e sacadas, com design que combina robustez e estilo.",
    icon: ArrowRight 
  }
];

export const PARTNERS: Partner[] = [
  { name: "Nova Decamp", logoUrl: "https://esquadlumi.com.br/wp-content/uploads/2024/08/Logo-NovaDecamp.png", url: "https://decampaluminio.com.br/" },
  { name: "Udinese", logoUrl: "https://esquadlumi.com.br/wp-content/uploads/2024/08/Udinese-Logo.avif" },
  { name: "Vidros Gerais", logoUrl: "https://esquadlumi.com.br/wp-content/uploads/2024/08/Logo-Vidros-Gerais.png", url: "https://vidrosgerais.com.br/" },
  { name: "Wurth", logoUrl: "https://esquadlumi.com.br/wp-content/uploads/2024/08/logo-parceiros-wm_Wurth.png", url: "https://www.wurth.com.br/" },
  { name: "Adere", logoUrl: "https://esquadlumi.com.br/wp-content/uploads/2024/08/logo-adere-colou-ta-colado.png", url: "https://www.adere.com/pt" },
];

export const GALLERY: GalleryImage[] = [
  { url: "https://esquadlumi.com.br/wp-content/uploads/elementor/thumbs/Porta-de-correr-integrada-branca-de-aluminio-01-scaled-qsnmvnbbgam81n581xfd8p58qlneftj25d55tnp9jc.jpg", alt: "Porta de correr integrada" },
  { url: "https://esquadlumi.com.br/wp-content/uploads/elementor/thumbs/Tero-Ripado-em-Aluminio-Amadeirado-04-scaled-qsnngsol83kh9sfak2j6cd0lwpepmnhn21kgjscdjc.jpg", alt: "Ripado em Alumínio" },
  { url: "https://esquadlumi.com.br/wp-content/uploads/elementor/thumbs/Esquadria_de_aluminio_perto_de_mim_portas_janelas_aluminio_5-qvnqrpx1ic07mkcpbew1bwx5fusmkav4jxqq1w2e14.jpg", alt: "Esquadria de Alumínio" },
  { url: "https://esquadlumi.com.br/wp-content/uploads/elementor/thumbs/Portao-de-Garagem-em-Esquaria-Amadeirado-qsnnza6bmsvhlpkmm271dp2yhial0cvlljg8boxn60.jpg", alt: "Portão de Garagem" },
  { url: "https://esquadlumi.com.br/wp-content/uploads/elementor/thumbs/Vidro-Fixo-em-Chale-de-Lazer-qsnnuy544axw2fv9x6qyvsgfvjnnilo5o35mnrczuw.jpg", alt: "Vidro Fixo Chalé" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Joyce Ribeiro",
    rating: 5,
    date: "2 meses atrás",
    text: "Recomendo!!! Entrega rápida e serviços de qualidade! Fiz toda minha casa com eles, sem reclamações...",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjW_xJjQjJqJqJqJqJqJqJqJqJqJqJqJ=s128-c0x00000000-cc-rp-mo"
  },
  {
    author: "Christianne Su",
    rating: 5,
    date: "1 ano atrás",
    text: "Gostaria de expressar minha satisfação com o excelente atendimento da ESQUAD LUMI! Desde o primeiro contato, fui muito bem atendido pela equipe, que demonstrou profissionalismo e atenção aos detalhes.",
    avatarUrl: null
  },
  {
    author: "Simone Quaresma",
    rating: 5,
    date: "3 meses atrás",
    text: "Boa noite! Gostaria de agradecer a empresa pelo excelência de seu trabalho em minha casa! Só tenho a agradecer a dedicação dos do primeiro contato até a finalização da obra parabéns a toda a equipe.",
    avatarUrl: null
  },
  {
    author: "ROSA",
    rating: 5,
    date: "3 meses atrás",
    text: "Estou muito satisfeita! Atendimento nota 1000 em todas as etapas. Recomendo! Olhem essas fotos! Cada serviço mais lindo que o outro!",
    avatarUrl: null
  }
];