import React, {useContext, useRef, useEffect} from 'react';
import ContactContext from "../../context/contact/ContactContext";
import PropTypes from 'prop-types';

const ContactFilter = props => {
    const contactContext = useContext(ContactContext);
    const text = useRef("");

    const {filterContacts, clearFilter, filtered} = contactContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ""
        }
    });

    const onChange = (e) => {
        if (text.current.value !== "") {
            filterContacts(e.target.value);
        } else {
            clearFilter()
        }
    };

    return (
        <form>
            <input type="text" ref={text} placeholder="Filter Context..." onChange={onChange}/>
        </form>
    );
};

ContactFilter.propTypes = {

};

export default ContactFilter;
