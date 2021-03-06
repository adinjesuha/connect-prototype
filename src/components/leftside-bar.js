import React from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { 
  FiHome, 
  FiCalendar, 
  FiBriefcase,
  FiFileText,
  FiEye,
  FiAward
} from 'react-icons/fi'
import AppMenu from './app-menu';

// dashboards
const dashboardRoutes = {
  id: 1,
  path: '/',
  name: 'Dashboard',
  icon: FiHome,
  header: 'Navegación',
};

const calendarAppRoutes = {
  id: 2,
  path: '/calendar-page',
  name: 'Calendario',
  header: 'Apps',
  icon: FiCalendar,
};

const projectAppRoutes = {
  id: 3,
  path: '/monitoring-page',
  name: 'Monitoreos',
  icon: FiBriefcase,
  badge: {
    variant: 'success',
    text: '4',
  },
};

const invoiceAppRoutes = {
  id: 4,
  path: '/invoice-page',
  name: 'Facturación',
  icon: FiFileText,
};

const analisisAppRoutes = {
  id: 5,
  path: '/analysis-page',
  name: 'Análisis',
  icon: FiEye,
  badge: {
    variant: 'info',
    text: '1',
  },
};

const companyAppRoutes = {
  id: 6,
  path: '/company-page',
  name: 'Empresas',
  icon: FiAward,
};

const menu = {
  menuItems:[
    dashboardRoutes, 
    calendarAppRoutes,
    projectAppRoutes,
    analisisAppRoutes,
    invoiceAppRoutes,
    companyAppRoutes,
  ]
}


/**
 * Sidenav
 */
const SideNav = () => {
  return <div className="sidebar-content">
    <div id="sidebar-menu">
      <AppMenu 
        menu={menu}
      />
    </div>
  </div>
}

const LeftSidebar = () => (
  <div className='left-side-menu'>
    <PerfectScrollbar>
      <SideNav />
    </PerfectScrollbar>
  </div>
);

export default LeftSidebar;