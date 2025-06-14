import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsMap {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const breadcrumbsMap: BreadcrumbsMap = {
  // Pages métiers
  'metiers': { label: 'Nos Métiers' },
  'courtier-assurance-entreprise': { label: 'Courtier Assurance Entreprise', parent: 'metiers' },
  'courtier-assurance-construction': { label: 'Courtier Assurance Construction', parent: 'metiers' },
  'courtier-assurance-auto': { label: 'Courtier Assurance Auto', parent: 'metiers' },
  'courtier-assurance-sante': { label: 'Courtier Assurance Santé', parent: 'metiers' },
  'courtier-assurance-emprunteur': { label: 'Courtier Assurance Emprunteur', parent: 'metiers' },
  'conseiller-patrimoine': { label: 'Conseiller en Gestion de Patrimoine', parent: 'metiers' },
  
  // Pages assurance décennale
  'assurance-decennale': { label: 'Assurance Décennale' },
  'assurance-decennale-macon': { label: 'Assurance Décennale Maçon', parent: 'assurance-decennale' },
  'assurance-decennale-electricien': { label: 'Assurance Décennale Électricien', parent: 'assurance-decennale' },
  'assurance-decennale-plombier': { label: 'Assurance Décennale Plombier', parent: 'assurance-decennale' },
  'assurance-decennale-charpentier': { label: 'Assurance Décennale Charpentier', parent: 'assurance-decennale' },
  'assurance-decennale-couvreur': { label: 'Assurance Décennale Couvreur', parent: 'assurance-decennale' },
  'assurance-decennale-chauffagiste': { label: 'Assurance Décennale Chauffagiste', parent: 'assurance-decennale' },
  'assurance-decennale-menuisier': { label: 'Assurance Décennale Menuisier', parent: 'assurance-decennale' },
  'assurance-decennale-carreleur': { label: 'Assurance Décennale Carreleur', parent: 'assurance-decennale' },
  'assurance-decennale-terrassier': { label: 'Assurance Décennale Terrassier', parent: 'assurance-decennale' },
  'assurance-decennale-betonneur': { label: 'Assurance Décennale Bétonneur', parent: 'assurance-decennale' },
  'assurance-decennale-ferrailleur': { label: 'Assurance Décennale Ferrailleur', parent: 'assurance-decennale' },
  'assurance-decennale-demolisseur': { label: 'Assurance Décennale Démolisseur', parent: 'assurance-decennale' },
  'assurance-decennale-plaquiste': { label: 'Assurance Décennale Plaquiste', parent: 'assurance-decennale' },
  'assurance-decennale-peintre': { label: 'Assurance Décennale Peintre', parent: 'assurance-decennale' },
  'assurance-decennale-platrier': { label: 'Assurance Décennale Platrier', parent: 'assurance-decennale' },
  'assurance-decennale-solier': { label: 'Assurance Décennale Solier', parent: 'assurance-decennale' },
  'assurance-decennale-cuisiniste': { label: 'Assurance Décennale Cuisiniste', parent: 'assurance-decennale' },
  'assurance-decennale-serrurier': { label: 'Assurance Décennale Serrurier', parent: 'assurance-decennale' },
  'assurance-decennale-etancheur': { label: 'Assurance Décennale Étancheur', parent: 'assurance-decennale' },
  'assurance-decennale-isolateur': { label: 'Assurance Décennale Isolateur', parent: 'assurance-decennale' },
  'assurance-decennale-ravaleur': { label: 'Assurance Décennale Ravaleur', parent: 'assurance-decennale' },
  'assurance-decennale-pisciniste': { label: 'Assurance Décennale Pisciniste', parent: 'assurance-decennale' },
  'assurance-decennale-photovoltaique': { label: 'Assurance Décennale Installateur Photovoltaïque', parent: 'assurance-decennale' },
  'assurance-decennale-ascensoriste': { label: 'Assurance Décennale Ascensoriste', parent: 'assurance-decennale' },
  'assurance-decennale-antenniste': { label: 'Assurance Décennale Antenniste', parent: 'assurance-decennale' },
  'assurance-decennale-alarme-securite': { label: 'Assurance Décennale Alarme & Sécurité', parent: 'assurance-decennale' },
  'assurance-decennale-automatisme': { label: 'Assurance Décennale Automatisme', parent: 'assurance-decennale' },
  
  // Pages assurance auto
  'assurance-auto': { label: 'Assurance Auto' },
  'assurance-auto-tous-risques': { label: 'Assurance Tous Risques', parent: 'assurance-auto' },
  'assurance-auto-au-tiers': { label: 'Assurance au Tiers', parent: 'assurance-auto' },
  'assurance-auto-conducteurs-resilies': { label: 'Conducteurs Résiliés', parent: 'assurance-auto' },
  'assurance-auto-au-kilometre': { label: 'Assurance au Kilomètre', parent: 'assurance-auto' },
  'assurance-auto-jeune-conducteur': { label: 'Jeune Conducteur', parent: 'assurance-auto' },
  'assurance-auto-malus': { label: 'Assurance Malus', parent: 'assurance-auto' },
  'assurance-auto-professionnelle': { label: 'Assurance Auto Professionnelle', parent: 'assurance-auto' },
  'assurance-auto-flottes': { label: 'Assurance Flottes', parent: 'assurance-auto' },
  'assurance-auto-temporaire': { label: 'Assurance Temporaire', parent: 'assurance-auto' },
  'assurance-auto-vehicules-collection': { label: 'Véhicules de Collection', parent: 'assurance-auto' },
  
  // Transport
  'transport': { label: 'Transport Professionnel', parent: 'assurance-auto' },
  'taxi': { label: 'Assurance Taxi', parent: 'transport' },
  'vtc': { label: 'Assurance VTC', parent: 'transport' },
  'voyageurs': { label: 'Transport de Voyageurs', parent: 'transport' },
  'professionnels-route': { label: 'Professionnels de la Route', parent: 'transport' },
  
  // Flottes
  'flottes': { label: 'Gestion de Flottes', parent: 'assurance-auto' },
  'compte-propre': { label: 'Flottes Entreprises', parent: 'flottes' },
  'transport-marchandises': { label: 'Transport de Marchandises', parent: 'flottes' },
  'transport-voyageurs': { label: 'Transport de Voyageurs', parent: 'flottes' },
  
  // Autres pages
  'assurance-emprunteur': { label: 'Assurance Emprunteur' },
  'protection-juridique': { label: 'Protection Juridique' },
  'solutions-financieres': { label: 'Solutions Financières' },
  'blog': { label: 'Blog' },
  'contact': { label: 'Contact' }
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Construire les breadcrumbs
  const breadcrumbs = [];
  
  // Ajouter l'accueil
  breadcrumbs.push({ path: '/', label: 'Accueil' });
  
  // Construire le chemin
  let currentPath = '';
  
  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    currentPath += `/${segment}`;
    
    // Cas spécial pour les sections transport et flottes
    if (segment === 'transport' || segment === 'flottes') {
      // Ajouter d'abord le parent assurance-auto
      breadcrumbs.push({ 
        path: '/assurance-auto', 
        label: breadcrumbsMap['assurance-auto'].label 
      });
      
      // Puis ajouter la catégorie
      breadcrumbs.push({ 
        path: currentPath, 
        label: breadcrumbsMap[segment].label 
      });
    } 
    // Gérer le segment final ou les enfants directs de assurance-auto
    else if (i === pathSegments.length - 1 || pathSegments[i-1] === 'transport' || pathSegments[i-1] === 'flottes') {
      // Pour les enfants directs de assurance-auto, ajouter le parent d'abord si pas déjà ajouté
      if (breadcrumbsMap[segment]?.parent && !currentPath.includes(breadcrumbsMap[segment].parent) && 
          breadcrumbsMap[segment].parent !== 'transport' && breadcrumbsMap[segment].parent !== 'flottes') {
        const parentPath = `/${breadcrumbsMap[segment].parent}`;
        breadcrumbs.push({ 
          path: parentPath, 
          label: breadcrumbsMap[breadcrumbsMap[segment].parent].label 
        });
      }
      
      // Ajouter le segment actuel s'il est dans notre map
      if (breadcrumbsMap[segment]) {
        breadcrumbs.push({ 
          path: currentPath, 
          label: breadcrumbsMap[segment].label 
        });
      } else if (segment.startsWith('assurance-decennale-')) {
        // Gérer les métiers décennale inconnus
        const metier = segment.replace('assurance-decennale-', '');
        breadcrumbs.push({
          path: currentPath,
          label: `Assurance Décennale ${metier.charAt(0).toUpperCase() + metier.slice(1)}`
        });
      }
    }
  }
  
  // Si pas de breadcrumbs générés (chemin inconnu), retourner null
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-lg mb-6" aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index === 0 ? (
              <Link 
                to={crumb.path} 
                className="text-primary-600 hover:text-primary-800 transition-colors flex items-center"
                aria-label="Accueil"
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium text-gray-700" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    to={crumb.path} 
                    className="text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;