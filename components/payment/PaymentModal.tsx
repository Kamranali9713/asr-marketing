"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, Check, Loader2 } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  price: string;
  serviceTitle: string;
}

export function PaymentModal({
  open,
  onOpenChange,
  planName,
  price,
  serviceTitle,
}: PaymentModalProps) {
  const [step, setStep] = useState<"payment-method" | "checkout" | "processing">(
    "payment-method"
  );
  const [selectedMethod, setSelectedMethod] = useState<
    "card" | "paypal" | "bank" | null
  >(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Cleanup function to restore scroll position
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "paypal", name: "PayPal", icon: "💳" },
    { id: "bank", name: "Bank Transfer", icon: "🏦" },
  ];

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setStep("processing");
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    // In a real app, you would integrate with Stripe, PayPal, etc.
    alert(
      `Payment initiated for ${planName} plan (${price}).\nService: ${serviceTitle}\nMethod: ${selectedMethod}`
    );

    // Reset and close
    setTimeout(() => {
      setStep("payment-method");
      setSelectedMethod(null);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] h-[90vh] max-h-[90vh] bg-[#0a1020] border border-white/10 text-white flex flex-col !top-[5%] !translate-y-0 sm:!top-[50%] sm:!translate-y-[-50%] m-4 sm:m-0 p-0 overflow-hidden">
        <DialogHeader className="flex-shrink-0 bg-[#0a1020] z-10 pb-4 border-b border-white/10 px-6 pt-6">
          <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Complete Your Purchase
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-sm sm:text-base">
            Select a payment method to proceed with your {planName} plan
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide px-6 pb-6">
        {step === "payment-method" && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4 sm:p-6">
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <span className="text-gray-400 text-sm sm:text-base">Plan</span>
                <span className="text-lg sm:text-xl font-semibold text-blue-400">
                  {planName}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <span className="text-gray-400 text-sm sm:text-base">Service</span>
                <span className="text-white font-medium text-sm sm:text-base truncate max-w-[60%]">{serviceTitle}</span>
              </div>
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-base sm:text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {price}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Choose Payment Method
              </h3>
              {paymentMethods.map((method) => {
                const Icon = method.icon as any;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id as any)}
                    className={`w-full p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedMethod === method.id
                        ? "border-blue-500 bg-blue-950/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        : "border-white/10 bg-[#050a15] hover:border-blue-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {typeof Icon === "string" ? (
                          <span className="text-xl sm:text-2xl">{Icon}</span>
                        ) : (
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                        )}
                        <span className="text-white font-medium text-sm sm:text-base">
                          {method.name}
                        </span>
                      </div>
                      {selectedMethod === method.id && (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 pt-2 sm:pt-4">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Your payment is secure and encrypted</span>
            </div>

            <Button
              onClick={() => setStep("checkout")}
              disabled={!selectedMethod}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Checkout
            </Button>
          </div>
        )}

        {step === "checkout" && (
          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Review Your Order
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-gray-300 flex-wrap gap-2 text-sm sm:text-base">
                  <span>Service:</span>
                  <span className="text-white truncate max-w-[60%]">{serviceTitle}</span>
                </div>
                <div className="flex justify-between text-gray-300 flex-wrap gap-2 text-sm sm:text-base">
                  <span>Plan:</span>
                  <span className="text-white">{planName}</span>
                </div>
                <div className="flex justify-between text-gray-300 flex-wrap gap-2 text-sm sm:text-base">
                  <span>Price:</span>
                  <span className="text-blue-400 font-semibold">{price}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3">
                  <div className="flex justify-between flex-wrap gap-2">
                    <span className="text-base sm:text-lg font-semibold text-white">Total</span>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {selectedMethod === "card" && (
              <div className="space-y-3 sm:space-y-4 bg-[#050a15] p-4 sm:p-6 rounded-xl border border-white/10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Card Details
                </h3>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 text-sm sm:text-base bg-[#0a1020] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="p-3 text-sm sm:text-base bg-[#0a1020] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-3 text-sm sm:text-base bg-[#0a1020] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full p-3 text-sm sm:text-base bg-[#0a1020] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            {selectedMethod === "paypal" && (
              <div className="bg-[#050a15] p-4 sm:p-6 rounded-xl border border-white/10">
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  You will be redirected to PayPal to complete your payment
                </p>
              </div>
            )}

            {selectedMethod === "bank" && (
              <div className="bg-[#050a15] p-4 sm:p-6 rounded-xl border border-white/10">
                <p className="text-gray-300 text-center mb-4 text-sm sm:text-base">
                  Bank transfer details will be sent to your email after order
                  confirmation
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={() => setStep("payment-method")}
                variant="outline"
                className="w-full sm:flex-1 border-white/10 text-white hover:bg-white/10 py-4 sm:py-6 text-sm sm:text-base"
              >
                Back
              </Button>
              <Button
                onClick={handlePayment}
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg shadow-blue-500/30"
              >
                Complete Payment
              </Button>
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="py-8 sm:py-12 text-center">
            <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 animate-spin mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Processing Payment...
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Please wait while we process your payment
            </p>
          </div>
        )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

