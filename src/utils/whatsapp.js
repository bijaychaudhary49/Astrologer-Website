const WHATSAPP_NUMBER = "9779821057199";

export const sendToWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const generateBookingMessage = ({ serviceName, name, phone, date, message }) => {
  return `Hello Guruji,

I would like to book a consultation.

Service: ${serviceName}
Name: ${name}
Phone: ${phone}
Date: ${date}
Message: ${message}`;
};

export const generateOrderMessage = ({ productName, qty, price, total, name, phone }) => {
  return `Hello Guruji,

I want to order:

Product: ${productName}
Quantity: ${qty}
Price per item: Rs. ${price}
Total: Rs. ${total}

Name: ${name}
Phone: ${phone}`;
};

export const generateContactMessage = () => {
  return `Hello Guruji,

I would like to connect with you regarding an astrology consultation. Please let me know your availability.`;
};
