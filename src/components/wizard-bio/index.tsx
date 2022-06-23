import React, { FC } from 'react';
import styles from './wizard-bio.module.scss';

interface WizardBioProps {
    name: string,
    age: number,
    children: JSX.Element
}

interface WizardImageProps {
    url: string
}

const WizardImage: FC<WizardImageProps> = ({ url }) => {
    return (
        <img src={url} alt='wizard image'></img>
    )
}


const WizardBio: FC<WizardBioProps> = ({ name, age, children }) => {
    return (
        <div className={styles['wizard-bio']}>
            <div className={styles['wizard-bio__content']}>
                <h1>{children}</h1>
                <p>Hello {name} </p>
                <p>Age : {age} </p>
                <WizardImage url="cool"/>
            </div>
        </div>
    )
};

export default WizardBio;

