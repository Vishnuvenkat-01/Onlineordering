export const SHOP_WHATSAPP_NUMBER = '919942403033';
export const SHOP_PHONE_DISPLAY = '+91 99424 03033';

export function getGeneralWhatsAppUrl(customText?: string): string {
  const text = customText || 'Hi Beemans! I would like to place an order / inquire about the menu.';
  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getCartWhatsAppUrl(
  items: { menuItem: { name: string; price: number }; quantity: number }[],
  total: number,
  customerInfo?: { name?: string; address?: string; phone?: string }
): string {
  let message = `🍽️ *New Order - Beemans Restaurant*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (customerInfo?.name) {
    message += `👤 *Customer:* ${customerInfo.name}\n`;
    if (customerInfo.phone) message += `📞 *Phone:* ${customerInfo.phone}\n`;
    if (customerInfo.address) message += `📍 *Delivery Address:* ${customerInfo.address}\n`;
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  }

  message += `📋 *Order Items:*\n`;
  items.forEach(({ menuItem, quantity }) => {
    const itemTotal = menuItem.price * quantity;
    message += `• *${quantity}x* ${menuItem.name} — ₹${itemTotal.toFixed(2)}\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Total Amount:* ₹${total.toFixed(2)}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `Please confirm my order and share estimated preparation/delivery time. Thank you!`;

  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
