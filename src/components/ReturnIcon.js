import React from 'react';
import {BsChevronLeft} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Returnicon = (props) => {
    return (
        <Link to={props.goTo}>
        <BsChevronLeft />
        </Link>
    );
}

export default Returnicon;
