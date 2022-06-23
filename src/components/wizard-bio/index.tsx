import React, { FC } from 'react';
import styles from './wizard-bio.module.scss';

interface WizardBioProps {
    name: string,
    age: number
}

interface WizardImageProps {
    url: string
}

const WizardImage: FC<WizardImageProps> = ({ url }) => {
    return (
        <img src={url} alt='wizard image'></img>
    )
}


const WizardBio: FC<WizardBioProps> = ({ name, age }) => {
    return (
        <div className={styles['wizard-bio']}>
            <div className={styles['wizard-bio__content']}>
                <p>Hello {name} </p>
                <p>Age : {age} </p>
                <WizardImage url="cool"/>
            </div>
        </div>
    )
};

export default WizardBio;

