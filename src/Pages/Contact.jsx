import { useEffect } from 'react';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Mihyeon Park';
  }, []);

  return (
    <PageTransition>
      <Contact />
    </PageTransition>
  );
}
