import { FC, useState } from 'react';
import Section from '../UI/Section/Section';
import style from './Contact.module.css';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { useTranslation } from "react-i18next";
import Modal from "@/components/UI/Modal/Modal";
import ContactForm from "@/components/ContactForm/ContactForm";

const MailIcon = FiMail as any;
const PhoneIcon = FiPhone as any;
const LinkedinIcon = FiLinkedin as any;
const MapPinIcon = FiMapPin as any;

const Contact: FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section id="contact" title={t('contact.title')}>
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h3 className={style.subtitle}>{t('contact.details')}</h3>
                    <p className={style.text}>
                        {t('contact.description')}
                    </p>

                    <div className={style.contactList}>
                        <a href="mailto:vovnenkooleksii@gmail.com" className={style.contactItem}>
                            <div className={style.icon}><MailIcon /></div>
                            <div>
                                <span>Email</span>
                                <p>vovnenkooleksii@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:+4915111072552" className={style.contactItem}>
                            <div className={style.icon}><PhoneIcon /></div>
                            <div>
                                <span>{t('contact.phone', 'Phone')}</span>
                                <p>+49 151 11072552</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/oleksii-vovnenko" target="_blank" rel="noreferrer" className={style.contactItem}>
                            <div className={style.icon}><LinkedinIcon /></div>
                            <div>
                                <span>LinkedIn</span>
                                <p>oleksii-vovnenko</p>
                            </div>
                        </a>

                        <div className={style.contactItem}>
                            <div className={style.icon}><MapPinIcon /></div>
                            <div>
                                <span>{t('contact.location', 'Location')}</span>
                                <p>Bahnhofstraße 7, 53567 Asbach, Germany</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.actionBox}>
                    <div className={style.card}>
                        <h4>{t('contact.form.title')}</h4>
                        <p>{t('contact.form.description')}</p>
                        <button onClick={() => setIsModalOpen(true)} className={style.mainBtn}>
                            {t('contact.form.button')}
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </Section>
    );
};

export default Contact;