import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, success: false, error: null });

    try {
      const response = await fetch('https://us-central1-penvrch2.cloudfunctions.net/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json();
      
      if (result.data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.data.error || 'Něco se pokazilo. Zkuste to prosím znovu.');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: error.message
      });
    }
  };

  return (
    <div className="contact-form-container" style={{
      background: 'transparent',
      boxShadow: 'none',
      border: 'none',
      padding: window.innerWidth <= 768 ? '0.5rem' : '2rem'
    }}>
      {/* Odstraníme nadpis "Kontaktujte nás" */}
      {/* <h2 className="contact-form-title" style={{
        color: 'var(--primary)',
        fontSize: window.innerWidth <= 768 ? '1.3rem' : '2rem',
        marginBottom: window.innerWidth <= 768 ? '0.4rem' : '1.5rem'
      }}>
        Kontaktujte nás
      </h2> */}
      
      {status.submitted && status.success && (
        <div className="form-success-message">
          Děkujeme za vaši zprávu! Brzy se vám ozveme.
        </div>
      )}
      
      {status.submitted && !status.success && (
        <div className="form-error-message">
          {status.error || 'Něco se pokazilo. Zkuste to prosím znovu.'}
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name" className="form-label">Jméno</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Zpráva</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.submitting}
          style={{ transform: 'none' }}
        >
          {status.submitting ? 'Odesílání...' : 'Odeslat'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm; 