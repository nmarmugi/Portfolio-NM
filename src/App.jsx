import React, { useContext } from 'react';
import styles from './App.module.css';
import Hamburger from './components/Hamburger/Hamburger';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './ErrorBoundary';
import { StateContext, SetStateContext } from './components/Provider/Provider';

function App() {
  const state = useContext(StateContext);
  const setState = useContext(SetStateContext);

  function handleClick(key) {
    setState({
      home: key === 'home',
      projects: key === 'projects',
      skills: key === 'skills'
    });
  }

  return (
    <ErrorBoundary>
      <div className={styles.containerMain}>
        <Hamburger />
        <Navbar />
        <div className={styles.maxWidth}>
          <div className={styles.containerBackground}>
            <img src="/img/5532919.jpg" alt="Background" />
          </div>
          <MainPage />
          <SkillsPage />
          <ProjectsPage />
          <Footer />
        </div>
        <a onClick={() => handleClick('home')} href="#home">
          <img className={styles.rocket} src="/img/startup_1208168.png" alt="Rocket" />
        </a>
      </div>
    </ErrorBoundary>
  );
}

export default App;
