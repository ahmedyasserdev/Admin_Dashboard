import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx';
import Team from './Components/Pages/Team/Team.jsx';
import Contacts from './Components/Pages/Contacts/Contacts.jsx';
import Invoices from './Components/Pages/Invoices/Invoices.jsx';
import Form from './Components/Pages/Form/Form.jsx';
import Calendar from './Components/Pages/Calendar/Calendar.jsx';
import Questions from './Components/Pages/FAQ/Questions.jsx'
import BarChart from './Components/Pages/BarChart/BarChart.jsx';
import PieChart from './Components/Pages/PieChart/PieChart.jsx';
import LineChart from './Components/Pages/LineChart/LineChart.jsx';
import Geography from './Components/Pages/Geography/Geography.jsx';
import NotFound from './Components/Pages/NotFound/NotFound.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Questions />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />

    </Route>

  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);