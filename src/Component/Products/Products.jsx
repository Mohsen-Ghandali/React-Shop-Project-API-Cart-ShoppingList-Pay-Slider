import React, { useState } from 'react';
import './Products.css';
import Modal from 'react-modal';
import BankInfoForm from '../BankInfoForm/BankInfoForm';

const Products = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showBankInfoModal, setShowBankInfoModal] = useState(false);

  const incrementCounter = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCounter = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      )
    );
  };

  const addToCart = (index) => {
    const selectedProduct = product[index];
    const existingProduct = cartItems.find((item) => item.name === selectedProduct.name);

    if (existingProduct) {
      // The product already exists in the cart, update its quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === selectedProduct.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // The product does not exist in the cart, add it
      setCartItems((prevCartItems) => [...prevCartItems, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };

  const handleShowCartModal = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  const getTotalPiece = () => {
    let totalPiece = 0;
    for (const item of cartItems) {
      totalPiece += item.quantity;
    }
    return totalPiece;
  };

  const handlePurchase = () => {
    // Here, we receive the user's banking and identification information and proceed with the purchase operation.
    // For instance, if the banking and identification information are stored in variables like 'name' and 'nationalCode', etc., you can use them here.
    // To perform the payment and purchase process, you can utilize the relevant API associated with the payment gateway and send the required information.
    // Displaying another modal (form for banking and identification information).
    setShowBankInfoModal(true);
  };

  const handleCloseBankInfoModal = () => {
    // Clearing the banking and identification information from the user form and closing the modal.
    setShowBankInfoModal(false);
  };

  Modal.setAppElement('#root');

  return (
    <div className="products">
      {product && product.length > 0 ? (
        product.map((elem, index) => {
          // Check if the product is already in the cart
          const isInCart = cartItems.some((item) => item.name === elem.name);
          const cartQuantity = cartItems.find((item) => item.name === elem.name)?.quantity || 0;

          return (
            <div className="prd text-center pb-2" key={index}>
              <img src={elem.img} alt={elem.alt} />
              <h2 className='text-start ps-4'>{elem.name}</h2>
              <p className='text-center fw-bold  text-dark mb-4'>Price: {elem.price}€</p>

              {isInCart ? (
                // If the product is in the cart, show the quantity and +/- buttons
                <div className="counter">
                  <button className='px-2 ms-2 rounded-1 bg-secondary text-white fw-bold' onClick={() => decrementCounter(index)}>-</button>
                  <span className=' px-4 py-1 text-white mx-2 bg-success rounded-5'>{cartQuantity}</span>
                  <button className='mb-3 rounded-1 bg-secondary text-white fw-bold ms-2 me-1' onClick={() => incrementCounter(index)}>+</button>
                </div>
              ) : (
                // If the product is not in the cart, show the "Add to Cart" button
                <button className='bg-danger text-white fw-medium px-4 my-3 rounded-2' onClick={() => addToCart(index)}>Add to Cart</button>
              )}
            </div>
          );
        })
      ) : (
        <div className="bg-danger text-center">
          <p className="fw-bold text-white pt-2">Failed to fetch - No content to display in the Products.</p>
          <span className="spinner-border spinner-border-sm mb-2 text-white"></span>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart">
          <button className='showCart' onClick={handleShowCartModal}><img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/basket-color-icon.png" alt="Cart" /> <span>{cartItems.length}</span></button>
          <button className='clearCart' onClick={() => setCartItems([])}>Clear</button>
        </div>
      )}

      {/* start Modal Cart*/}
      <Modal
        isOpen={showCartModal}
        onRequestClose={handleCloseCartModal}
        contentLabel="Shopping Cart"
      >
        <div className="container mt-5">
          <div className="cart-items">
            <h3 className="text-center">Shopping Cart</h3>
            {cartItems.length > 0 ? (
              <>
                <table className="table cart-table text-center">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Rate (€)</th>
                      <th>Subtotal (€)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                          <button className="minus btn btn-secondary btn-sm me-1 " onClick={() => decrementCounter(index)}>-</button>
                          <span className="numb px-3 pb-2 pt-1 text-white bg-success rounded-2">{item.quantity}</span>
                          <button className="plus btn btn-secondary btn-sm ms-1" onClick={() => incrementCounter(index)}>+</button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                          <button className="btn btn-danger btn-sm remove" onClick={() => removeFromCart(index)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="fw-bold mt-4"><span className="text-danger">Total Pieces:</span> {getTotalPiece()}</p>
                <p className="fw-bold mb-4"><span className="text-danger">Total Price:</span> {getTotalPrice()}€</p>
                <button className="btn btn-primary offset-md-5 purchase" onClick={handlePurchase}>Purchase</button>
              </>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </div>
        </div>
        <button className='close' onClick={handleCloseCartModal}><img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-line-icon.png" alt="close" /></button>
      </Modal>
      {/*end Modal Cart*/}

      {/* Modal Bank Information */}
      <Modal
        isOpen={showBankInfoModal}
        onRequestClose={handleCloseBankInfoModal}
        contentLabel="Bank Information"
      >
        <BankInfoForm />
        <button className='close' onClick={handleCloseBankInfoModal}><img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-line-icon.png" alt="close" /></button>
      </Modal>
    </div>
  );
};

export default Products;
