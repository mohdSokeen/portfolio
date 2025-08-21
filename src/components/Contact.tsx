import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import React, { useRef, useState, useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const form = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
      if (feedback) {
        const timer = setTimeout(() => {
          setFeedback('');
        }, 5000);
  
        return () => clearTimeout(timer);
      }
    }, [feedback]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message
      };

      emailjs.send(
        'mohdsokeen505',   // Replace with your EmailJS service ID
        'sokeen_template505',   // Replace with your EmailJS template ID
        templateParams, 
        '9Im7JOVbwTennDnJ_'   // Replace with your EmailJS user ID
      )
        .then(
          (response) => {
            setFeedback('Mail has been sent successfully!');
            setAlertSeverity('success');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            setFeedback(`Failed to send mail.`);
            setAlertSeverity('error');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Let’s bring your vision to life! Have a project in mind? Reach out, and let’s create something amazing together!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                name='name'
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                name='email'
                id="outlined-required"
                label="Your Email or Phone"
                placeholder="What's your email or phone?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
            </div>
            <TextField
              required
              name='message'
              id="outlined-multiline-static"
              label="Message"
              placeholder="Feel free to send me any inquiries or questions."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            {feedback && (
              <Alert
                icon={alertSeverity === 'success' ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
                severity={alertSeverity}
                className="custom-alert"
              >
                {feedback}
              </Alert>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}
