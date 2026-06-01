import React, { useEffect, useState } from 'react';
import './styled.css';

export default function Notification({ message, handleClose, ...rest }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        handleClose();
      }, 1000);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [handleClose]);

  return (
    <div className={`NotificationWrapper ${isVisible ? '' : 'slideOut'}`} {...rest}>
      <div>{message}</div>
    </div>
  );
}
