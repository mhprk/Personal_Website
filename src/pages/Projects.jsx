import { useEffect } from 'react';
import ProjectsPage from '../Page';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Mihyeon Park';
  }, []);

  return (
    <PageTransition>
      <ProjectsPage />
    </PageTransition>
  );
}
