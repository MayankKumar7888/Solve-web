import React from 'react';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import FooterLinks from '../Component/FooterLinks';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import OurStores from '../Component/OurStores';
import Footer from '../Component/Footer';

export default function Contact() {
  const footerLink = [
    {
      label: "Social",
      xs: 12,
      md: 6,
      pages: [
        { label: "Instagram", path: "/instagram" },
        { label: "Facebook", path: "/facebook" },
        { label: "TikTok", path: "/tiktok" },
      ],
    },
    {
      label: "Contact",
      xs: 12,
      md: 6,
      pages: [
        { label: "Info@Example.com", path: "/instagram" },
        { label: "+49 123 456 78", path: "/facebook" },
      ],
    },
  ];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    message: false,
  });

  const [errorMessages, setErrorMessages] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: false });
    setErrorMessages({ ...errorMessages, [field]: '' });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};
    let newErrorMessages = {};

    if (!formData.name.trim()) {
      newErrors.name = true;
      newErrorMessages.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      newErrorMessages.email = 'Please enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = true;
      newErrorMessages.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      newErrorMessages.message = 'Please enter your message';
    }

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

    return (
        <>
            <div className="contact">
                <Navbar navColor="var(--txt1-clr)" />
                <div className="contact-inner">
                    <h2 className="contact-heading">Contact</h2>
                </div>
                <div className="contact-detail">
                    <Grid container spacing={2} sx={{ px: { xs: 2, md: 5 } }}>
                        <Grid item size={{ xs: 12, md: 6}}>
                            <FooterLinks footerLinks={footerLink} />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6}} sx={{ p: { xs: 2, md: 5 }}}>
                            <Box component="form" onSubmit={handleSubmit}
                                sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField label="FullName" value={formData.name} onChange={handleChange('name')}
                                    error={errors.name}
                                    fullWidth
                                    InputProps={{
                                        endAdornment: errors.name ? (
                                        <InputAdornment position="end">
                                            <Tooltip title={errorMessages.name} arrow>
                                                <ErrorIcon color="error" />
                                            </Tooltip>
                                        </InputAdornment>
                                        ) : null,
                                    }}
                                />
                                <TextField label="Email" value={formData.email} onChange={handleChange('email')}
                                    error={errors.email} fullWidth
                                    InputProps={{
                                        endAdornment: errors.email ? (
                                        <InputAdornment position="end">
                                            <Tooltip title={errorMessages.email} arrow>
                                                <ErrorIcon color="error" />
                                            </Tooltip>
                                        </InputAdornment>
                                        ) : null,
                                    }}
                                />
                                <TextField label="Message" value={formData.message} onChange={handleChange('message')}
                                    error={errors.message} multiline rows={4} fullWidth
                                    InputProps={{
                                        endAdornment: errors.message ? (
                                        <InputAdornment position="end">
                                            <Tooltip title={errorMessages.message} arrow>
                                                <ErrorIcon color="error" />
                                            </Tooltip>
                                        </InputAdornment>
                                        ) : null,
                                    }}
                                />
                                <button className="submit-btn" type="submit">Submit</button>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Divider />
                <OurStores />
                <Footer />
            </div>
        </>
    );
}
