import { FC } from 'react';
import Section from '../UI/Section/Section';
import style from './Contact.module.css';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const MailIcon = FiMail as any;
const PhoneIcon = FiPhone as any;
const LinkedinIcon = FiLinkedin as any;
const MapPinIcon = FiMapPin as any;

const Contact: FC = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h3 className={style.subtitle}>Contact Details</h3>
                    <p className={style.text}>
                        I am currently open to new opportunities and collaborations.
                        Feel free to reach out via any of the channels below!
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
                                <span>Phone</span>
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
                                <span>Location</span>
                                <p>Bahnhofstraße 7, 53567 Asbach, Germany</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.actionBox}>
                    <div className={style.card}>
                        <h4>Let's create something amazing together.</h4>
                        <p>Available for freelance and full-time positions.</p>
                        <a href="mailto:vovnenkooleksii@gmail.com" className={style.mainBtn}>
                            Send a Message
                        </a>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Contact;