import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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
                        home: "Home",
                        skills: "Skills",
                        works: "Works",
                        contact: "Contact"
                    },
                    hero: {
                        title: "Hi everyone ,",
                        thanks: "Thank You.",
                        intro: [
                            "My name is Oleksii. I’m a Web Developer from Ukraine with over 2 years of experience. I believe in deep dedication to every project, where client satisfaction is the primary goal of my career.",
                            "I specialize in HTML, CSS, and JavaScript, with a solid understanding of web hosting and infrastructure. I approach complex challenges with an analytical mindset, ensuring clear and efficient solutions while maintaining a professional and friendly partnership with my clients.",
                            "You can rely on me for honest communication and high-quality digital services."
                        ]
                    }
                }
            },
            de: {
                translation: {
                    nav: {
                        home: "Startseite",
                        skills: "Kenntnisse",
                        works: "Projekte",
                        contact: "Kontakt"
                    },
                    hero: {
                        title: "Hallo zusammen ,",
                        thanks: "Danke schön.",
                        intro: [
                            "Mein Name ist Oleksii. Ich bin Webentwickler aus der Ukraine und habe mehr als 2 Jahre Berufserfahrung. Ich widme mich jedem Projekt mit voller Hingabe, denn die Zufriedenheit der Kundinnen und Kunden steht im Mittelpunkt meiner beruflichen Laufbahn.",
                            "Ich spezialisiere mich auf HTML, CSS und JavaScript und verfüge über ein solides Verständnis von Webhosting und Infrastruktur. Komplexe Herausforderungen gehe ich analytisch an und sorge für klare, effiziente Lösungen, während ich gleichzeitig eine professionelle und partnerschaftliche Zusammenarbeit mit meinen Kundinnen und Kunden pflege.",
                            "Sie können sich auf ehrliche und professionelle Dienstleistungen verlassen."
                        ]
                    }
                }
            }
        }
    });

export default i18n;