import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            skills: 'Skills',
            works: 'Works',
            contact: 'Contact',
          },
          hero: {
            title: 'Hi everyone ,',
            thanks: 'Thank You.',
            intro: [
              'My name is Oleksii. I’m a Web Developer from Ukraine with over 2 years of experience. I believe in deep dedication to every project, where client satisfaction is the primary goal of my career.',
              'I specialize in HTML, CSS, and JavaScript, with a solid understanding of web hosting and infrastructure. I approach complex challenges with an analytical mindset, ensuring clear and efficient solutions while maintaining a professional and friendly partnership with my clients.',
              'You can rely on me for honest communication and high-quality digital services.',
            ],
          },
          docs: {
            cv: 'Resume',
            certifications: 'Certifications',
          },
          title: {
            skills: 'Skills',
            portfolio: 'My Portfolio',
          },
          contact: {
            title: 'Get In Touch',
            details: 'Contact Details',
            description:
              'I am currently open to new opportunities and collaborations. Feel free to reach out via any of the channels below!',
            form: {
              title: "Let's create something amazing together.",
              description: 'Available for freelance and full-time positions.',
              button: 'Send a Message',
              success: 'Thank you! Your message has been sent.',
              error: 'Something went wrong....',
            },
          },
        },
      },
      de: {
        translation: {
          nav: {
            home: 'Startseite',
            skills: 'Kenntnisse',
            works: 'Projekte',
            contact: 'Kontakt',
          },
          hero: {
            title: 'Hallo zusammen ,',
            thanks: 'Danke schön.',
            intro: [
              'Mein Name ist Oleksii. Ich bin Webentwickler aus der Ukraine und habe mehr als 2 Jahre Berufserfahrung. Ich widme mich jedem Projekt mit voller Hingabe, denn die Zufriedenheit der Kundinnen und Kunden steht im Mittelpunkt meiner beruflichen Laufbahn.',
              'Ich spezialisiere mich auf HTML, CSS und JavaScript und verfüge über ein solides Verständnis von Webhosting und Infrastruktur. Komplexe Herausforderungen gehe ich analytisch an und sorge für klare, effiziente Lösungen, während ich gleichzeitig eine professionelle und partnerschaftliche Zusammenarbeit mit meinen Kundinnen und Kunden pflege.',
              'Sie können sich auf ehrliche und professionelle Dienstleistungen verlassen.',
            ],
          },
          docs: {
            cv: 'Lebenslauf',
            certifications: 'Zertifizierungen',
          },
          title: {
            skills: 'Fähigkeiten',
            portfolio: 'Mein Portfolio',
          },
          contact: {
            title: 'Kontakt',
            details: 'Kontaktdaten',
            description:
              'Ich bin derzeit offen für neue Möglichkeiten und Kooperationen. Kontaktieren Sie mich gerne über einen der unten genannten Kanäle!',
            form: {
              title: 'Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
              description: 'Verfügbar für Freelance-Projekte und Vollzeitpositionen.',
              button: 'Nachricht senden',
              success: 'Danke! Ihre Nachricht wurde gesendet.',
              error: 'Etwas ist schief gelaufen...',
            },
          },
        },
      },
    },
  });

export default i18n;
