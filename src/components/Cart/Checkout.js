import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    console.log(enteredName);
    const enteredStreet = streetInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const enteredZipIsValid = isFiveChars(enteredZip);
    console.log(enteredZipIsValid);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      zip: enteredZipIsValid,
    });
    console.log(formInputsValidity);

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredZipIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const zipControlClasses = `${classes.control} ${formInputsValidity.zip ? "" : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
      </div>
      {!formInputsValidity.street && <p>Please enter a valid street!</p>}

      <div className={zipControlClasses}>
        <label htmlFor="zip">Zip</label>
        <input ref={zipInputRef} type="text" id="zip" />
      </div>
      {!formInputsValidity.zip && <p>Please enter a valid zip (5 characters)!</p>}

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
      </div>
      {!formInputsValidity.city && <p>Please enter a valid city!</p>}

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
