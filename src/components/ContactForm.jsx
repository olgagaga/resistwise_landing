import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    onClose();
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ваше имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Ваш email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Ваше сообщение"
              rows="4"
            />
          </div>
          <button type="submit" className="submit-button">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 