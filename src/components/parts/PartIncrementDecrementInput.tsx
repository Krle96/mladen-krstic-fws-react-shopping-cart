import React, {useState} from 'react';

const IncrementDecrementCounter = () => {
  const [amount, setAmount] = useState(0);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  };

  const incrementAmount = () => {
    setAmount(Number(amount) + 1);
  };

  const decrementAmount = () => {
    if (amount > 0) setAmount(Number(amount) - 1);
  };

  return (
    <div className="quantity">
      <input
        id="quantityInput"
        className="qty"
        type="number"
        step="1"
        min="1"
        onChange={handleChange}
        value={amount}
      />
      <div className="quantity__button">
        <button
          className="quantity-add js-inc quantity-button"
          onClick={incrementAmount}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
        </button>
        <button
          className="quantity-remove js-dec quantity-button"
          onClick={decrementAmount}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrementCounter;
