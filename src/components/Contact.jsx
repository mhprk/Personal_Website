import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('sent');
      form.current.reset();
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('error');
    });
  }

  return (
    <div id="contact-container">
      <h2 id="contact">Contact Me</h2>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" id="submit-button" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && <p style={{ color: 'green', marginTop: '10px' }}>Message sent!</p>}
        {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
