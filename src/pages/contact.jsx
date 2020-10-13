import React from 'react'

const Contact = (...props) => {
  return (
    <div>
      <h4>Hello Contact</h4>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
};

export default Contact;
