import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  { label: 'Accueil', path: '/' },
  { 
    label: 'Nos Métiers', 
    path: '/metiers',
    children: [
      { label: 'Courtier Assurance Entreprise', path: '/metiers/courtier-assurance-entreprise' },
      { label: 'Courtier Assurance Construction', path: '/metiers/courtier-assurance-construction' },
      { label: 'Courtier Assurance Auto', path: '/metiers/courtier-assurance-auto' },
      { label: 'Conseiller en Gestion de Patrimoine', path: '/metiers/conseiller-patrimoine' }
    ]
  },
  {
    label: 'Auto',
    path: '/assurance-auto',
    children: [
      { label: 'Tous Risques', path: '/assurance-auto-tous-risques' },
      { label: 'Au Tiers', path: '/assurance-auto-au-tiers' },
      { label: 'Conducteurs Résiliés', path: '/assurance-auto-conducteurs-resilies' },
      { label: 'Au Kilomètre', path: '/assurance-auto-au-kilometre' },
      { label: 'Jeune Conducteur', path: '/assurance-auto-jeune-conducteur' },
      { label: 'Professionnelle', path: '/assurance-auto-professionnelle' },
      { label: 'Flottes', path: '/assurance-auto-flottes' }
    ]
  },
  {
    label: 'Responsabilité',
    path: '/rc-pro',
    children: [
      { label: 'RC Pro', path: '/rc-pro' },
      { label: 'Décennale', path: '/assurance-decennale' },
      { label: 'Responsabilité Transporteurs', path: '/assurance-auto/transport/professionnels-route' }
    ]
  },
  {
    label: 'Multirisque',
    path: '/multirisque-professionnelle',
    children: [
      { label: 'Commerces & Entreprises', path: '/multirisque-professionnelle' },
      { label: 'Marchandises Transportées', path: '/assurance-marchandises-transportees' }
    ]
  },
  {
    label: 'Collectives',
    path: '/assurances-collectives',
    children: [
      { label: 'Santé', path: '/assurances-collectives?tab=sante' },
      { label: 'Prévoyance', path: '/assurances-collectives?tab=prevoyance' },
      { label: 'Retraite', path: '/assurances-collectives?tab=retraite' }
    ]
  },
  { label: 'Emprunteur', path: '/assurance-emprunteur' },
  { label: 'Juridique', path: '/protection-juridique' },
  { label: 'Solutions Financières', path: '/solutions-financieres' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

export const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  const toggleSubmenu = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <header className="bg-primary-800 text-white p-4 shadow-lg" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-xl font-bold hover:text-secondary-300 transition-colors focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2 focus:ring-offset-primary-800 rounded px-2 py-1"
            aria-label="XCR Courtier - Retour à l'accueil"
          >
            XCR Courtier
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`font-semibold px-3 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? 'text-white bg-primary-700'
                    : 'text-gray-200 hover:text-white hover:bg-primary-700'
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </Link>
              
              {item.children && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {isOpen && (
            <div 
              id="mobile-menu"
              className="absolute top-16 left-0 right-0 bg-primary-800 z-50 p-4 shadow-lg"
            >
              {navigationItems.map((item) => (
                <div key={item.path} className="border-b border-primary-700 last:border-b-0">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      to={item.path}
                      className={`font-semibold ${
                        isActive(item.path) ? 'text-white' : 'text-gray-200'
                      }`}
                      onClick={() => !item.children && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    
                    {item.children && (
                      <button
                        onClick={() => toggleSubmenu(item.path)}
                        className="text-gray-200 focus:outline-none p-2"
                        aria-expanded={openSubmenu === item.path}
                      >
                        {openSubmenu === item.path ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {item.children && openSubmenu === item.path && (
                    <div className="ml-4 mt-2 space-y-2 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-gray-200 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;