import React, { createContext, useContext, useState } from 'react';

const ContactFormContext = createContext();

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <ContactFormContext.Provider
      value={{
        isContactFormOpen,
        openContactForm,
        closeContactForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}; 