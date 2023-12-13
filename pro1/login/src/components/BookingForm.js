import React from 'react';
import './c.css'; 

class BookingForm extends React.Component {
  render() {
    const currentDate = new Date().toISOString().split('T')[0];
    return (
      <div className="h">
        <link rel="stylesheet" href="c.css" />
        <form action="action_page.php">
          <div className="container">
            <h1>BOOK MY TRIP</h1>
            <p>
              <b>PLEASE FILL THIS FORM TO BOOK YOUR TRIP.</b>
            </p>
            <hr />

            <label htmlFor="name">
              <b>NAME</b>
            </label>
            
            <input type="text" placeholder="Name" name="name" id="name" required />
            
            <label htmlFor="des">
              <b>FROM</b>
            </label>
            
            <input
              type="text"
              placeholder="Enter your pick-up location"
              name="des"
              id="des"
              required
            />
            
            <label htmlFor="des">
              <b>TO</b>
            </label>
            
            <input
              type="text"
              placeholder="Enter your destination"
              name="des"
              id="des"
              required
            />
         

            <label htmlFor="date">
              <b>DATE</b>
            </label>
            
            <input type="date"
              placeholder="Date"
              name="date"
              id="date"
              min={currentDate} required />
          


            <label>
              <b>NO.OF PERSONS</b>
            </label>
           
            <input
              type="number"
              min="1"
              max="10"
              required
            />
           
           
            <label htmlFor="e">
              <b>EMAIL</b>
            </label>
            
            <input type="email" placeholder="Email" name="e" id="e" required />
            <hr />

            <button type="submit" className="registerbtn">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
