import React, { FC, useState } from 'react';
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
    // we get initial value for `name` from parent prop,  and set as initial value in useState
    const nameValueFromProp = name;
    const [wizardName, setWizardName] = useState(nameValueFromProp);

    const handleNameInputChange = input => {
        console.log('handling change to Wiz Name input :', input);
        setWizardName(input);

        // setIsError(false);
      };

    return (
        <div className={styles['wizard-bio']}>
            <div className={styles['wizard-bio__content']}>
                <h1>{children}</h1>
                <p>Hello {name} </p>
                <p>Age : {age} </p>
                <WizardImage url="cool"/>
                <div>Change Name from {nameValueFromProp}?  :
                    {/* LAST ON HERE WITH THIS DRILL, USESTATE AND USEEFFECT PER STACK ARTICLEK */}
                <input
                    className={styles["wizard-bio__input"]}
                    placeholder="New Name"
                    data-testid={'wizard-bio__input'}
                    onChange={e => handleNameInputChange(e.target.value)}
                />
                <br />
                New Name : {wizardName}
                </div>


        {/* ORACLE
        <input
         className={styles["alert__input"]}
         placeholder="Enter here to dismiss alert"
        data-testid={'alert__input'}
        onChange={e => handleInputChange(e.target.value)}
        value={userInput}
      /> */}
            </div>
        </div>
    )
};

export default WizardBio;

