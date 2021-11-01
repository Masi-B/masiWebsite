export const contactInfo = [
  {
    title: "email",
    url: "mailto:masimba.banda@gmail.com",
    cName: "contact-links",
  },
  {
    title: "phone",
    url: "tel:+61405988376",
    cName: "phone-links",
  },
  {
    contacts: (
      <div>
        <text className="myContacts" readOnly>
          {"Contact me at\n"}
        </text>

        <ul className="contact-links">
          <li>Email</li>
          <li>Mobile</li>
        </ul>
      </div>
    ),
  },
];
