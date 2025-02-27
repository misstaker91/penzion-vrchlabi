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
    <div className="contact-form-container">
      <h2 className="contact-form-title">Kontaktujte nás</h2>
      
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
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Jméno *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Zpráva *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            disabled={status.submitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={status.submitting}
        >
          {status.submitting ? 'Odesílání...' : 'Odeslat zprávu'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm; 