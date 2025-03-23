import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App.tsx';
import About from './pages/About.tsx';
import Privacy from './pages/Privacy.tsx';
import Cookies from './pages/Cookies.tsx';
import Terms from './pages/Terms.tsx';
import Careers from './pages/Careers.tsx';
import ContactUs from './pages/ContactUs.tsx';
import RequestProposal from './pages/RequestProposal.tsx';
import PartnerPortal from './pages/PartnerPortal.tsx';
import PatientRecruitment from './pages/PatientRecruitment.tsx';
import Pricing from './pages/Pricing.tsx';
import TherapeuticAreas from './pages/TherapeuticAreas.tsx';
import Solutions from './pages/Solutions.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import CaseStudyDetail from './pages/CaseStudyDetail.tsx';
import Oncology from './pages/therapeutic-areas/Oncology.tsx';
import Neurology from './pages/therapeutic-areas/Neurology.tsx';
import Cardiovascular from './pages/therapeutic-areas/Cardiovascular.tsx';
import Immunology from './pages/therapeutic-areas/Immunology.tsx';
import MetabolicDisorders from './pages/therapeutic-areas/MetabolicDisorders.tsx';
import RareDiseases from './pages/therapeutic-areas/RareDiseases.tsx';
import ParticipateStudy from './pages/ParticipateStudy.tsx';
import Metasite from './pages/Metasite.tsx';
import MetasiteRegistration from './pages/MetasiteRegistration.tsx';
import EligibilityScreener from './pages/EligibilityScreener.tsx';
import RecruitmentChannels from './pages/RecruitmentChannels.tsx';
import AdCopyGenerator from './pages/AdCopyGenerator.tsx';
import Sponsors from './pages/Sponsors.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="/partner-portal" element={<PartnerPortal />} />
        <Route path="/patient-recruitment" element={<PatientRecruitment />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/therapeutic-areas" element={<TherapeuticAreas />} />
        <Route path="/therapeutic-areas/oncology" element={<Oncology />} />
        <Route path="/therapeutic-areas/neurology" element={<Neurology />} />
        <Route path="/therapeutic-areas/cardiovascular" element={<Cardiovascular />} />
        <Route path="/therapeutic-areas/immunology" element={<Immunology />} />
        <Route path="/therapeutic-areas/metabolic-disorders" element={<MetabolicDisorders />} />
        <Route path="/therapeutic-areas/rare-diseases" element={<RareDiseases />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/metasite" element={<Metasite />} />
        <Route path="/solutions/metasite/register" element={<MetasiteRegistration />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/participate" element={<ParticipateStudy />} />
        <Route path="/tools/eligibility-screener" element={<EligibilityScreener />} />
        <Route path="/recruitment-channels" element={<RecruitmentChannels />} />
        <Route path="/tools/ad-copy-generator" element={<AdCopyGenerator />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);