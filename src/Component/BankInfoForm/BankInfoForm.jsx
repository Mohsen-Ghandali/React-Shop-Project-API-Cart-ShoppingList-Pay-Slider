import React, { useState } from 'react';

const BankInfoForm = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform payment operation and connect to the banking interface
    // This part likely involves encoding and encryption for financial data security

    // Show an alert with a successful purchase message
    alert('Your purchase was successful!');

    // Close the modal after the purchase operation
    onClose();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="card bank-info-form shadow-lg mt-2">
            <div className="card-body">
              <h3 className="card-title text-center">Bank Information</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="accountNumber"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block offset-5 ">Pay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BankInfoForm;
