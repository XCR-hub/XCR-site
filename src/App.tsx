import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import InteractiveElementsValidator from './components/common/InteractiveElementsValidator';
import { MainNavigation } from './components/navigation/MainNavigation';
import Breadcrumbs from './components/navigation/Breadcrumbs';

import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AssuranceAutoPage from './pages/AssuranceAutoPage';
import AssuranceDecennalePage from './pages/AssuranceDecennalePage';
import AssuranceEmprunteurPage from './pages/AssuranceEmprunteurPage';
import ProtectionJuridiquePage from './pages/ProtectionJuridiquePage';
import SolutionsFinancieresPage from './pages/SolutionsFinancieresPage';
import RCProPage from './pages/RCProPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Landing pages décennale par métier
import DecennaleMaconPage from './pages/decennale/DecennaleMaconPage';
import DecennaleElectricienPage from './pages/decennale/DecennaleElectricienPage';
import DecennalePlombierPage from './pages/decennale/DecennalePlombierPage';
import DecennaleCharpentierPage from './pages/decennale/DecennaleCharpentierPage';
import DecennaleCouvreurPage from './pages/decennale/DecennaleCouvreurPage';
import DecennaleChauffagistePage from './pages/decennale/DecennaleChauffagistePage';
import DecennaleMenuisierPage from './pages/decennale/DecennaleMenuisierPage';
import DecennaleCarreleurPage from './pages/decennale/DecennaleCarreleurPage';
import DecennaleMetierRouter from './pages/decennale/DecennaleMetierRouter';

// Landing pages assurance auto
import AssuranceTousRisquesPage from './pages/auto/AssuranceTousRisquesPage';
import AssuranceAuTiersPage from './pages/auto/AssuranceAuTiersPage';
import AssuranceConducteursResiliesPage from './pages/auto/AssuranceConducteursResiliesPage';
import AssuranceAuKilometrePage from './pages/auto/AssuranceAuKilometrePage';
import AssuranceJeuneConducteurPage from './pages/auto/AssuranceJeuneConducteurPage';
import AssuranceAutoProfessionnellePage from './pages/auto/AssuranceAutoProfessionnellePage';
import AssuranceFlottesPage from './pages/auto/AssuranceFlottesPage';
import AssuranceMalusPage from './pages/auto/AssuranceMalusPage';
import AssuranceTemporairePage from './pages/auto/AssuranceTemporairePage';
import AssuranceVehiculesCollectionPage from './pages/auto/AssuranceVehiculesCollectionPage';

// Landing pages transport de personnes
import AssuranceTaxiPage from './pages/auto/transport/AssuranceTaxiPage';
import AssuranceVTCPage from './pages/auto/transport/AssuranceVTCPage';
import AssuranceTransportVoyageursPage from './pages/auto/transport/AssuranceTransportVoyageursPage';
import AssuranceProfessionnelsRoutePage from './pages/auto/transport/AssuranceProfessionnelsRoutePage';

// Landing pages flottes de véhicules
import AssuranceFlottesComptePage from './pages/auto/flottes/AssuranceFlottesComptePage';
import AssuranceFlottesMarchandisesPage from './pages/auto/flottes/AssuranceFlottesMarchandisesPage';
import AssuranceFlottesVoyageursPage from './pages/auto/flottes/AssuranceFlottesVoyageursPage';

// Pages métiers
import MetiersPage from './pages/metiers/index';
import CourtierAssuranceEntreprisePage from './pages/metiers/CourtierAssuranceEntreprisePage';

// 404 Page Component
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Monitor performance metrics
  usePerformanceMonitor();

  return (
    <ErrorBoundary>
      <InteractiveElementsValidator />
      <div className="min-h-screen flex flex-col">
        <MainNavigation />

        <main className="flex-grow" id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/assurance-auto" element={<AssuranceAutoPage />} />
            <Route path="/assurance-decennale" element={<AssuranceDecennalePage />} />
            <Route path="/assurance-emprunteur" element={<AssuranceEmprunteurPage />} />
            <Route path="/protection-juridique" element={<ProtectionJuridiquePage />} />
            <Route path="/solutions-financieres" element={<SolutionsFinancieresPage />} />
            <Route path="/rc-pro" element={<RCProPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postSlug" element={<BlogPostPage />} />
            
            {/* Pages métiers */}
            <Route path="/metiers" element={<MetiersPage />} />
            <Route path="/metiers/courtier-assurance-entreprise" element={<CourtierAssuranceEntreprisePage />} />
            
            {/* Landing pages décennale par métier */}
            <Route path="/assurance-decennale-macon" element={<DecennaleMaconPage />} />
            <Route path="/assurance-decennale-electricien" element={<DecennaleElectricienPage />} />
            <Route path="/assurance-decennale-plombier" element={<DecennalePlombierPage />} />
            <Route path="/assurance-decennale-charpentier" element={<DecennaleCharpentierPage />} />
            <Route path="/assurance-decennale-couvreur" element={<DecennaleCouvreurPage />} />
            <Route path="/assurance-decennale-chauffagiste" element={<DecennaleChauffagistePage />} />
            <Route path="/assurance-decennale-menuisier" element={<DecennaleMenuisierPage />} />
            <Route path="/assurance-decennale-carreleur" element={<DecennaleCarreleurPage />} />
            
            {/* Router pour les autres métiers décennale */}
            <Route path="/assurance-decennale-:metier" element={<DecennaleMetierRouter />} />
            
            {/* Landing pages assurance auto */}
            <Route path="/assurance-auto-tous-risques" element={<AssuranceTousRisquesPage />} />
            <Route path="/assurance-auto-au-tiers" element={<AssuranceAuTiersPage />} />
            <Route path="/assurance-auto-conducteurs-resilies" element={<AssuranceConducteursResiliesPage />} />
            <Route path="/assurance-auto-au-kilometre" element={<AssuranceAuKilometrePage />} />
            <Route path="/assurance-auto-jeune-conducteur" element={<AssuranceJeuneConducteurPage />} />
            <Route path="/assurance-auto-professionnelle" element={<AssuranceAutoProfessionnellePage />} />
            <Route path="/assurance-auto-flottes" element={<AssuranceFlottesPage />} />
            <Route path="/assurance-auto-malus" element={<AssuranceMalusPage />} />
            <Route path="/assurance-auto-temporaire" element={<AssuranceTemporairePage />} />
            <Route path="/assurance-auto-vehicules-collection" element={<AssuranceVehiculesCollectionPage />} />
            
            {/* Landing pages transport de personnes */}
            <Route path="/assurance-auto/transport/taxi" element={<AssuranceTaxiPage />} />
            <Route path="/assurance-auto/transport/vtc" element={<AssuranceVTCPage />} />
            <Route path="/assurance-auto/transport/voyageurs" element={<AssuranceTransportVoyageursPage />} />
            <Route path="/assurance-auto/transport/professionnels-route" element={<AssuranceProfessionnelsRoutePage />} />
            
            {/* Landing pages flottes de véhicules */}
            <Route path="/assurance-auto/flottes/compte-propre" element={<AssuranceFlottesComptePage />} />
            <Route path="/assurance-auto/flottes/transport-marchandises" element={<AssuranceFlottesMarchandisesPage />} />
            <Route path="/assurance-auto/flottes/transport-voyageurs" element={<AssuranceFlottesVoyageursPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">XCR Courtier</h3>
                <p className="text-gray-300 text-sm">
                  Votre partenaire de confiance pour tous vos besoins d'assurance depuis plus de 15 ans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Nos Services</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li><a href="/assurance-auto" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Assurance Auto</a></li>
                  <li><a href="/assurance-decennale" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Assurance Décennale</a></li>
                  <li><a href="/rc-pro" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">RC Pro</a></li>
                  <li><a href="/assurance-emprunteur" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Assurance Emprunteur</a></li>
                  <li><a href="/protection-juridique" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Protection Juridique</a></li>
                  <li><a href="/solutions-financieres" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Solutions Financières</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Nos Métiers</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li><a href="/metiers/courtier-assurance-entreprise" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Courtier Assurance Entreprise</a></li>
                  <li><a href="/metiers/courtier-assurance-construction" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Courtier Assurance Construction</a></li>
                  <li><a href="/metiers/courtier-assurance-auto" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Courtier Assurance Auto</a></li>
                  <li><a href="/metiers/conseiller-patrimoine" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Conseiller en Gestion de Patrimoine</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Ressources</h4>
                <ul className="space-y-2 text-sm" role="list">
                  <li><a href="/blog" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Blog</a></li>
                  <li><a href="/rss.xml" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Flux RSS</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} XCR Courtier. Tous droits réservés. | 
                <span className="ml-2">ORIAS N° 11 061 425</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;