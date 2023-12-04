// OrderTracker.js
import React from 'react';

interface OrderTrackerProps {
    status: string;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ status }) => {
    const steps = ['Pagamento', 'Preparando', 'Enviado', 'Entregue'];

    return (
        <div className="flex items-center justify-center mt-8 flex-col">
            <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center">
                        <div
                            className={`flex items-center ${index < steps.indexOf(status) ? 'text-green-500' : 'text-gray-500'
                                } ${index === steps.indexOf(status) ? 'font-bold' : ''}`}
                        >
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${index < steps.indexOf(status) ? 'border-green-500' : 'border-green-500'
                                    }`}
                            >
                                {/* <span className="material-symbols-outlined">
                                    receipt_long
                                </span> */}
                            </div>
                            {index < steps.length - 1 && <div className="h-px w-16 bg-gray-300"></div>}
                        </div>
                        <div className={`mt-3 text-gray-500 text-xs ${index === steps.indexOf(status) ? 'font-bold' : ''}`}>
                            {step}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderTracker;
