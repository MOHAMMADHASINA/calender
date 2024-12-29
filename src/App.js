import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { CommunicationProvider } from "./context/data";
import AdminModule from "./routes/adminModule";
import UserDashboard from "./routes/userDashboard";
import CalendarView from "./components/notificationCalander";
import CompanyListPage from "./routes/companies";
import "./App.css";

function App() {
  return (
    <CommunicationProvider>
      <Router>
        <div className="app-container">
          <nav className="main-navigation">
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>  Calendar Application</div>
            <ul className="nav-links">
  <li>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
      Dashboard
    </NavLink>
  </li>
  <li>
    <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
      Add Company
    </NavLink>
  </li>
  <li>
    <NavLink to="/company" className={({ isActive }) => (isActive ? "active" : "")}>
      Company List
    </NavLink>
  </li>
  <li>
    <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
      Calendar
    </NavLink>
  </li>
</ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminModule />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/company" element={<CompanyListPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CommunicationProvider>
  );
}

export default App;
