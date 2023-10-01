// QRCodeManager.js
import React, {
  useState,
} from 'react';

const QRCodeManager =
  () => {
    const [
      phoneNumbers,
      setPhoneNumbers,
    ] =
      useState(
        []
      );
    const [
      newPhoneNumber,
      setNewPhoneNumber,
    ] =
      useState(
        ''
      );

    const addPhoneNumber =
      () => {
        setPhoneNumbers(
          [
            ...phoneNumbers,
            newPhoneNumber,
          ]
        );
        setNewPhoneNumber(
          ''
        );
      };

    return (
      <div>
        <h2>
          QR
          Code
          Management
        </h2>
        <input
          type='text'
          placeholder='Enter Phone Number'
          value={
            newPhoneNumber
          }
          onChange={(
            e
          ) =>
            setNewPhoneNumber(
              e
                .target
                .value
            )
          }
        />
        <button
          onClick={
            addPhoneNumber
          }>
          Add
          QR
          Code
        </button>
        <ul>
          {phoneNumbers.map(
            (
              phoneNumber,
              index
            ) => (
              <li
                key={
                  index
                }>
                {
                  phoneNumber
                }
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

export default QRCodeManager;
