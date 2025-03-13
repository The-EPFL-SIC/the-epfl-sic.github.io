import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

// the main page
import Index from './pages/Index'

// the page about sic
import Members from './pages/sic_informations/Members'
import OurEngagement from './pages/sic_informations/OurEngagement'
import PvStatusAg from './pages/sic_informations/PvStatusAg'
import Contact from './pages/sic_informations/Contact'

// the blog 
import TheBlog from './pages/sic_informations/Blog'
import BlogPost from './pages/sic_informations/BlogPost'

// the pages that are used before and between competitions to register participation 
import Companies from './pages/between_events/Companies'
import Labs from './pages/between_events/Labs'
import ChallengeInscription from './pages/between_events/ChallengeInscription'

// the pages that are used during the competition
import Schedule from './pages/during_event/Schedule'
import  Challenge from './pages/during_event/Challenge'
import Activities from './pages/during_event/Activities'
import TeamPresentation from './pages/during_event/TeamPresentation'
import Speaker from './pages/during_event/Speaker'
import Workshop from './pages/during_event/Workshop'
import CompanyStand from './pages/during_event/CompanyStand'

// a boolean to multiplex between the two version of the site
// during event and between events
import is_event_happening from './is_event_happening'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/our-engagement" element={<OurEngagement/>} />
        <Route path="/pv-status-ag" element={<PvStatusAg/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<TheBlog /> } />
        <Route path="/blog/:blogPostId" element={<BlogPost /> } />
        {
          (is_event_happening) ? 
            [
              <Route path="/event-schedule" element={<Schedule />} />,
              <Route path="/activities" element={<Activities />} />,
              <Route path="/the-challenge" element={<Challenge />} />,
              <Route path="/selected-team/:teamId" element={<TeamPresentation />} />,
              <Route path="/honorific-team/:teamId" element={<TeamPresentation />} />,
              <Route path="/speaker/:speakerId" element={<Speaker />} />,
              <Route path="/workshop/:workshopId" element={<Workshop />} />,
              <Route path="/company-stand/:companyStand" element={<CompanyStand />} />,
            ]:
            [
              <Route path="/companies" element={<Companies />} />,
              <Route path="/labs" element={<Labs />} />,
              <Route path="/challenge-inscription" element={<ChallengeInscription />} />
            ]
          }
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
)