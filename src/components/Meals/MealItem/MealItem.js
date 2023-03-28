import { Fragment } from "react";
import classes from "./MealItem.module.css";
const price = `$${props.price.toFixed(2)}`;

const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div className=''>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
        </li>
    );
};

export default MealItem;
