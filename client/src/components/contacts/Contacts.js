import React, {Fragment, useContext} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from 'prop-types';
import ContactContext from "../../context/contact/ContactContext"
import ContactItem from "./ContactItem";

const Contacts = props => {

    const contactContext = useContext(ContactContext);

    const {contacts, filtered} = contactContext;

    if (contacts.length === 0) {
        return <h4>Please addd contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ? filtered.map(contact =>
                                                      <CSSTransition key={contact.id} timeout={500} classNames="item">
                                                          <ContactItem key={contact.id} contact={contact}/>
                                                      </CSSTransition>
                    )
                    : contacts.map(contact =>
                                       <CSSTransition key={contact.id} timeout={500} classNames="item"><ContactItem
                                           key={contact.id} contact={contact}/>
                                       </CSSTransition>
                    )}
            </TransitionGroup>
        </Fragment>
    );
};

Contacts.propTypes = {

};

export default Contacts;
