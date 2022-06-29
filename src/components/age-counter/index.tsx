import React, { FC, useState, useRef, useEffect } from 'react';
import styles from './age-counter.module.scss';

interface AgeCounterProps {
    initAge: number,
}

const AgeCounter: FC<AgeCounterProps> = ({ initAge }) => {

    const ageValueFromProp = initAge;

    const [age, setAge] = useState(ageValueFromProp);

    const [ageMessage, setAgeMessage] = useState(null);

    // state for age error messages to display to the user
    const [ageError, setAgeError] = useState(null);

    // state  disabling of save, incre, decre buttons.
    // init saveDisable as true so save btn not disabled on first render
    const [saveDisable, setSaveDisabled] = useState(true);
    const [incrementDisable, setIncrementDisabled] = useState(false);
    const [decrementDisable, setDecrementDisabled] = useState(false);

    // use useRef to  see if this is the first render
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) { // will be true on first render... exec  code block setting it to false.
            firstRender.current = false;
            return;
        }

        if ( age === 0) {
            setAgeMessage('You are a twinkle in your daddy\'s eye');
        }

       if ( age >= 1 && age <= 12) {
        setAgeMessage('You are a Child');
       }

       if ( age >= 13 && age <= 19) {
        setAgeMessage('You are a Teen');
       }

       // ds
        if (age >= 1 ) {
            setIncrementDisabled(false);
        }

        if (age <= 100 ) {
            setDecrementDisabled(false);
        }

        setSaveDisabled(validation());

    }, [age]);

    const validation = () => {

        if (age < 0) {
            setAgeError('Enter an age greater than zero.');
            setDecrementDisabled(true);
            setAgeMessage(null);
            return true;
        }
        if (age >= 100) {
            setAgeError('Age greater than 100 not allowed');
            setIncrementDisabled(true);
            return true;
        }
        else {
            setAgeError(null)
            return false;
        }
    }

    const handleSave = () => {
        console.log('handleSave triggered');
    }


      const handleIncrement = () => {
        setAge(prevCount => prevCount + 1);
      };

      //Create handleDecrement event handler
      const handleDecrement = () => {
        setAge(prevCount => prevCount - 1);
      };

    return (
        <div className={styles['age-counter']}>
            <div className={styles['age-counter__content']}>

                    <h5>What is your age?</h5>
                    <div>
                        <button onClick={handleDecrement} disabled={decrementDisable}>-</button>
                        <span>  {age}  </span>
                        <button onClick={handleIncrement} disabled={incrementDisable}>+</button>
                    </div>
                    { ageMessage && <p>{ageMessage}</p>}
                    { ageError && <p>{ageError}</p>}
                <form onSubmit= {handleSave} >
                  <button type="submit" disabled={saveDisable}>Save</button>
                </form>
                </div>
            </div>
    )
};

export default AgeCounter;