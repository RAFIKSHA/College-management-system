import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Students } from './components/Students';
import Faculty from './components/Faculty';
import { Courses } from './components/Courses';
import { Analytics } from './components/Analytics';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'dashboard': return 'Dashboard';
      case 'students': return 'Students';
      case 'faculty': return 'Faculty';
      case 'courses': return 'Courses';
      case 'analytics': return 'Analytics';
      default: return 'Dashboard';
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'students': return <Students />;
      case 'faculty': return <Faculty />;
      case 'courses': return <Courses />;
      case 'analytics': return <Analytics />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="flex-1 lg:ml-64">
        <Header 
          onMenuToggle={toggleSidebar}
          title={getSectionTitle()}
        />
        
        <main className="p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;