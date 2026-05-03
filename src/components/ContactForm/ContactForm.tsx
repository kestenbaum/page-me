import { FC, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';

import style from './ContactForm.module.css';

const ContactForm: FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_879fj55', 'template_wkdlkpg', form.current!, 'QBqpYI7vnd6Ea-OQJ')
      .then(() => {
        toast.success(t('contact.form.success', 'Danke! Ihre Nachricht wurde gesendet.'), {
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            fontFamily: 'inherit',
          },
        });
        onSuccess();
      })
      .catch((error) => {
        toast.error(t('contact.form.error', 'Etwas ist schief gelaufen...'), {
          duration: 4000,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <h3>{t('contact.form.title')}</h3>

      <input type="text" name="user_name" placeholder="Name (Optional)" />

      <input type="email" name="user_email" placeholder="Email *" required />

      <input type="text" name="subject" placeholder="Betreff *" required />

      <textarea name="message" placeholder="Ihre Nachricht *" rows={5} required />

      <button type="submit" disabled={loading} className={style.submitBtn}>
        {loading ? '...' : t('contact.form.button')}
      </button>
    </form>
  );
};

export default ContactForm;
