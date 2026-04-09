import { useState, useContext } from 'react';
import { CheckoutContext } from '../Context/checkoutContext';

interface CheckoutContextWithPromo {
  applyPromo: (code: string) => Promise<void>;
}

export function PromoCode() {
  const context = useContext(CheckoutContext);
  const [code, setCode]       = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    if (!code.trim()) return;
    setLoading(true);
    if (context && 'applyPromo' in context) {
      await (context as CheckoutContextWithPromo).applyPromo(code.trim());
      setMessage('Promo code applied.');
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Promo code"
      />
      <button onClick={handleApply} disabled={loading}>
        {loading ? 'Applying...' : 'Apply'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}