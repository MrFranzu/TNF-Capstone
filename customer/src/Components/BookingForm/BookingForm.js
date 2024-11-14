import React, { useState } from 'react';
import './BookingForm.css';
import { db } from './firebaseConfig';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { QRCodeCanvas } from 'qrcode.react';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [numAttendees, setNumAttendees] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventTheme, setEventTheme] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [menuPackage, setMenuPackage] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleContactNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setContactNumber(value);
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = (e) => {
    e.preventDefault();
    if (contactNumber.length !== 11) {
      alert('Please enter exactly 11 digits for the contact number.');
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetForm = () => {
    setName('');
    setContactNumber('');
    setEmail('');
    setPaymentMethod('');
    setNumAttendees('');
    setEventType('');
    setEventTheme('');
    setEventDate('');
    setMenuPackage('');
    setNotes('');
    setStep(1);
  };

  const handleDone = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    const uniqueCode = `${eventTheme}-${numAttendees}-${Date.now()}`;
    setQrCodeValue(uniqueCode);

    // Convert types here
    const bookingData = {
      name,
      contactNumber: Number(contactNumber), // Convert to number
      email,
      paymentMethod,
      numAttendees: Number(numAttendees), // Convert to number
      eventType,
      eventDate: Timestamp.fromDate(new Date(eventDate)), // Convert to Firestore Timestamp
      menuPackage,
      notes,
      qrCode: uniqueCode, // Store the unique code in the qrCode field
    };

    setLoading(true);
    try {
      const bookingDocRef = doc(db, 'bookings', uniqueCode); // Change to use qrCode
      await setDoc(bookingDocRef, bookingData); // Directly save to the bookings collection
      console.log("Document written with ID: ", bookingDocRef.id);
      setIsBooked(true);
      resetForm();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('There was an error creating your booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderSummary = () => (
    <div className="summary">
      <h2>Summary</h2>
      {Object.entries({
        name,
        contactNumber,
        email,
        paymentMethod,
        numAttendees,
        eventType,
        eventTheme,
        eventDate,
        menuPackage,
        notes,
      }).map(([key, value]) => (
        <div className="summary-item" key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
        </div>
      ))}
      <div className="button-container">
        {loading ? <p>Loading...</p> : <button type="button" onClick={handleDone}>Confirm</button>}
      </div>
      {isBooked && <QRCodeCanvas value={qrCodeValue} size={256} style={{ margin: 'auto' }} />}
    </div>
  );

  const eventTypes = [
    { id: 'catering', label: 'Catering' },
    { id: 'event-center', label: 'Event Center' },
  ];

  return (
    <div className="booking-form">
      {!isBooked ? (
        <>
          <h1>Welcome!</h1>
          <p className="booking-intro">Book Your Event Now!</p>
          {step === 1 ? (
            <form onSubmit={handleNext}>
              <div className="box-container">
                <h2>Personal Information</h2>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Contact Number</label>
                <input type="tel" placeholder="Your 11-digit Contact Number" value={contactNumber} onChange={handleContactNumberChange} required maxLength="11" />
                <label>Email</label>
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Payment Method</label>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                  <option value="" disabled>Select Payment Method</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="gcash">Gcash</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="cash">Cash</option>
                </select>
                <input type="number" placeholder="Number of Attendees" value={numAttendees} onChange={(e) => setNumAttendees(e.target.value)} required min="1" />
              </div>
              <button type="submit">Next</button>
            </form>
          ) : step === 2 ? (
            <form onSubmit={handleNext}>
              <div className="box-container">
                <h2>Event Type</h2>
                <div className="radio-group">
                  {eventTypes.map((event) => (
                    <label 
                      key={event.id} 
                      className={eventType === event.label ? 'active' : ''} // Apply 'active' class conditionally
                    >
                      <input 
                        type="radio" 
                        name="eventType" 
                        value={event.label} 
                        checked={eventType === event.label} 
                        onChange={(e) => setEventType(e.target.value)} 
                        required 
                      />
                      {event.label}
                    </label>
                  ))}
                </div>
                <input type="text" placeholder="Event Theme" value={eventTheme} onChange={(e) => setEventTheme(e.target.value)} required />
                <label>Event Date</label>
                <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
                <label>Menu Package</label>
                <input type="text" placeholder="Menu Package" value={menuPackage} onChange={(e) => setMenuPackage(e.target.value)} required />
                <label>Notes</label>
                <textarea placeholder="Any additional notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>
              <div className="button-container">
                <button type="button" onClick={handlePrevious}>Previous</button>
                <button type="submit">Next</button>
              </div>
            </form>
          ) : renderSummary()}
        </>
      ) : (
        <div className="thank-you">
          <h2>Thank you for booking!</h2>
          <p>Kindly <strong>Screenshot</strong> or <strong>take a photo</strong> of this.</p>
          <QRCodeCanvas value={qrCodeValue} size={256} style={{ margin: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default BookingForm;
