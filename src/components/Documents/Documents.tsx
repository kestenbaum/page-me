import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Documents.module.css';

const Documents: FC = () => {
    const { t } = useTranslation();

    const docs = [
        {
            id: 1,
            label: t('docs.cv'),
            path: '/documents/CV.pdf',
            icon: '📄'
        },
        {
            id: 2,
            label: t('docs.certifications'),
            path: '/documents/all_docs.pdf',
            icon: '🎓',
        }
    ];

    return (
        <section className={style.section}>
            <div className={style.container}>
                {docs.map(doc => (
                    <a
                        key={doc.id}
                        href={doc.path}
                        download
                        className={style.card}
                    >
                        <span className={style.icon}>{doc.icon}</span>
                        <span className={style.text}>{doc.label}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Documents;