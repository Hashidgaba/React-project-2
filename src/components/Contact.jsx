import React, { useState, useEffect } from 'react';

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

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form (you can add your logic here)
      console.log('Form submitted:', formData);
      setIsFormSubmitted(true);
    }
  };

  useEffect(() => {
    // You can add additional logic after form submission, e.g., sending data to a server
    if (isFormSubmitted) {
      // Example: Reset the form after submission
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

    // Clear validation error when the user starts typing
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Form</h2>
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
          />
          {errors.message && (
            <span style={styles.error}>{errors.message}</span>
          )}
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginTop: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default ContactForm;