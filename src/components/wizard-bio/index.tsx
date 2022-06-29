import React, { FC, useState, useRef, useEffect } from 'react';
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
    const ageValueFromProp = age;

    const [wizardName, setWizardName] = useState(nameValueFromProp);
    const [wizardAge, setWizardAge] = useState(ageValueFromProp);

    // state for name error messages to display to the user
    const [wizardNameError, setWizardNameError] = useState(null);
    // state for age error messages to display to the user
    const [wizardAgeError, setWizardAgeError] = useState(null);

    // state for save button. init as true so disabled on first render
    const [disable, setDisabled] = useState(true);
    const [incrementDisable, setIncrementDisabled] = useState(false);
    const [decrementDisable, setDecrementDisabled] = useState(false);

    // use useRef to  see if this is the first render
    const firstRender = useRef(true);

    useEffect(() => {
        // SKIP validation on the first render. Dont annoy the user with error messages on load,
        // for instance, on first load form fields are empty, we dont want to throw red validation error messags on them .
        if (firstRender.current) { // will be true on first render... exec  code block setting it to false.
            firstRender.current = false;
            return;
        }

        if (wizardAge >= 1 ) {
            setIncrementDisabled(false);
        }

        if (wizardAge <= 100 ) {
            setDecrementDisabled(false);
        }

        setDisabled(formValidation());

    }, [wizardName, wizardAge]);

    const formValidation = () => {
        if (wizardName === "") {
            setWizardNameError('Thou wizard name canst be-ith\' blank');
            return true;
        }
        if (/\d/.test(wizardName)) {
            setWizardNameError('Thou wizard name canst contain numbers');
            return true;
        }
        if (wizardAge <= 0) {
            setWizardAgeError('Thou wizard age canst be less than zero');
            setDecrementDisabled(true);
            return true;
        }
        if (wizardAge >= 100) {
            setWizardAgeError('Thou wizard name cannot be older than 100');
            setIncrementDisabled(true);
            return true;
        }
        else {
            setWizardNameError(null)
            setWizardAgeError(null)
            return false;
        }
    }

    const handleSave = () => {
        // ...
        console.log('handleSave triggered');
    }

    const handleNameInputChange = input => {
        console.log('handling change to Wiz Name input :', input);
        setWizardName(input);

        // setIsError(false);
      };

      const handleIncrement = () => {
        setWizardAge(prevCount => prevCount + 1);
      };

      //Create handleDecrement event handler
      const handleDecrement = () => {
        setWizardAge(prevCount => prevCount - 1);
      };

    return (
        <div className={styles['wizard-bio']}>
            <div className={styles['wizard-bio__content']}>
                <h1>{children}</h1>
                <p>Wizard Name: {name} </p>
                <p>Wizard Age : {age} </p>
                <WizardImage url="https://neverwintervault.org/sites/neverwintervault.org/files/project/22939/images/1133627606fullres.jpg"/>
                <div>Change Name from {nameValueFromProp}?  :</div>
                <div>Change Age from {ageValueFromProp}?  :</div>
                    <div>
                        <button onClick={handleDecrement} disabled={decrementDisable}>-</button>
                        <h5>New Wizard Age: {wizardAge}</h5>
                        <button onClick={handleIncrement} disabled={incrementDisable}>+</button>
                    </div>
                    { wizardAgeError && <p>{wizardAgeError}</p>}
                <form onSubmit= {handleSave} >
                <input
                    className={styles["wizard-bio__input"]}
                    type="text"
                    placeholder="New Name"
                    data-testid={'wizard-bio__input'}
                    onChange={e => handleNameInputChange(e.target.value)}
                />
                { wizardNameError && <p>{wizardNameError}</p>}
                <br />
                New Name : {wizardName}
                <br />
                <button type="submit" disabled={disable}>Save</button>
                </form>

                </div>
            </div>
    )
};

export default WizardBio;

