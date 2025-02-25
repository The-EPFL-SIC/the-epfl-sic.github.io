import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

// the page that are always used
import Index from './pages/Index'
import Members from './pages/Members'
import Contact from './pages/Contact'
import OurEngagement from './pages/OurEngagement'
import PvStatusAg from './pages/PvStatusAg'

// the blog 
import TheBlog from './pages/Blog'
import BlogPost from './pages/BlogPost'

// the pages that are used before and between competitions to register participation 
import Companies from './pages/Companies'
import Labs from './pages/Labs'
import Competition from './pages/Competition'

// the pages that are used during the competition
import  CurrentEditionInformation from './pages/CurrentEditionInformation'
import Schedule from './pages/Schedule'
import Jury from './pages/Jury'
import SelectedTeam from './pages/SelectedTeam'

// this is only imported to display the empty page template 
import EmptyPageTemplate from './pages/template/EmptyPageTemplate'

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
          // disable those routes during the competition
          // and reenable them after the competition
          /*
            [
              <Route path="/companies" element={<Companies/>} />,
              <Route path="/labs" element={<Labs/>} />,
              <Route path="/competition" element={<Competition/>} />
            ] 
          */
        }  

        { 
          // enable those routes just before and during the competition
          // disable them after the competition
          [
            <Route path="/current-event-edition-information" element={<CurrentEditionInformation />} />,
            <Route path="/event-schedule" element={<Schedule />} />,
            <Route path="/jury/:juryId" element={<Jury />} />,
            <Route path="/selected-team/:teamId" element={<SelectedTeam />} />
          ]
        }

        <Route path="/empty-page-template" element={<EmptyPageTemplate />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
)