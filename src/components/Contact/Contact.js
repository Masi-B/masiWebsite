import React, { Component } from 'react'
import { contactInfo } from './ContactInfo';
import "./Contact.css";

export class Contact extends Component {
    render() {
        return (
          <div className="contact">
            <footer className="contactInfo">
              <h2>Contact</h2>
              <div className="myContacts">
                {contactInfo.map((item, index) => {
                  return (
                    <div>
                      <a className="myContacts" href={item.url}>
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            </footer>
          </div>
        );
    }
}

export default Contact
