import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const QRCodeComponent = ({ value, size = 150, logo }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <QRCode
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
        logoImage={logo}
        logoWidth={50}
        logoHeight={50}
      />
    </div>
  );
};

export default QRCodeComponent;