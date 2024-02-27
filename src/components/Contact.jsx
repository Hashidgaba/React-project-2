import React, { useState, useEffect } from 'react';
import '../App.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsFormSubmitted(true);
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Get in touch </h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder='NAME'
          />
          {errors.name && (
            <span style={styles.error}>{errors.name}</span>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder=' Enter your Email'
          />
          {errors.email && (
            <span style={styles.error}>{errors.email}</span>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            placeholder = 'Show your thoughts'
          />
          {errors.message && (
            <span style={styles.error}>{errors.message}</span>
          )}
        </div>
        <button className='btn' type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor:'rgb(41, 11, 11)',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
   fontSize:'2.4rem',
   textShadow:'2px 5px 2px black'

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    overflow:'hidden',
  },
  label: {
    marginBottom: '8px',
    fontSize:'1.2rem'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width:'100%',
    backgroundColor:''
  },
  textarea: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    width:'100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition:'all 0.3s linear',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default ContactForm;