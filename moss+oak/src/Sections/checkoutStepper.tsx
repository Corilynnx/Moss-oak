// CheckoutStepper.tsx
import { useCheckoutContext } from '../Context/checkoutContext';
import { ShippingForm } from './shippingForm';
import { PaymentForm } from './paymentForm';
import { ReviewStep } from './reviewStep';
import type { CheckoutStep } from '../Types/types';

const STEP_LABELS: Record<CheckoutStep, string> = {
  shipping: 'Shipping',
  payment: 'Payment',
  review: 'Review',
  
};

const STEPS: CheckoutStep[] = ['shipping', 'payment', 'review'];

function StepIndicator() {
  const { step } = useCheckoutContext();
  const currentIndex = STEPS.indexOf(step);

  return (
    <nav aria-label="Checkout progress">
      <ol style={{ display: 'flex', alignItems: 'center', gap: 0, listStyle: 'none' }}>
        {STEPS.map((s, i) => {
          const isActive = i === currentIndex;

          return (
            <li key={s} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
              <span aria-current={isActive ? 'step' : undefined}>
                {STEP_LABELS[s]}
              </span>
              {i < STEPS.length - 1 && <hr aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function StepContent() {
  const { step } = useCheckoutContext();

  switch (step) {
    case 'shipping':
      return <ShippingForm />;
    case 'payment':
      return <PaymentForm />;
    case 'review':
      return <ReviewStep />;
  }
}

export function CheckoutStepper() {
  return (
    <div>
      <StepIndicator />
      <StepContent />
    </div>
  );
}