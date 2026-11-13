// Function to toggle the visibility of credit card information
function toggleCreditCardInfo() {
    const creditCardField = document.getElementById('credit-card-info');
    const paymentOption = document.querySelector('input[name="payment-method"]:checked');
    
    // Check if a payment option is selected
    if (paymentOption) {
        creditCardField.style.display = paymentOption.value === 'online' ? 'block' : 'none';
    } else {
        creditCardField.style.display = 'none'; // Hide if no payment option is selected
    }
}
// Handle card type selection and set maxlength for card number
const cardTypeSelect = document.getElementById('card-type');
const cardNumberInput = document.getElementById('card-number');

cardTypeSelect.addEventListener('change', function() {
    const selectedCardType = this.value;
    console.log(`Selected Card Type: ${selectedCardType}`);
    
    // Set maxlength based on card type
    if (selectedCardType === 'amex') {
        cardNumberInput.maxLength = 15; // 15 digits for American Express
    } else {
        cardNumberInput.maxLength = 16; // 16 digits for Visa and MasterCard
    }
});
// Initialize credit card info and delivery address fields
toggleCreditCardInfo();
toggleDeliveryAddress();
// Function to toggle the visibility of the delivery address field
function toggleDeliveryAddress() {
    const deliveryAddressField = document.getElementById('delivery-address');
    const deliveryOption = document.querySelector('input[name="order-type"]:checked');
    
    // Check if an order type is selected
    if (deliveryOption) {
        deliveryAddressField.style.display = deliveryOption.value === 'delivery' ? 'block' : 'none';
    } else {
        deliveryAddressField.style.display = 'none'; // Hide if no order type is selected
    }
}

// Add event listeners to payment method radio buttons
const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', toggleCreditCardInfo);
});

// Add event listeners to order type radio buttons
const orderTypeRadios = document.querySelectorAll('input[name="order-type"]');
orderTypeRadios.forEach(radio => {
    radio.addEventListener('change', toggleDeliveryAddress);
});

// Function to toggle the visibility of billing address fields and autofill
function toggleBillingAddress(checkbox) {
    const billingAddressField = document.getElementById('billing-address-fields');
    const deliveryAddressFields = {
        name: document.getElementById('delivery-name'),
        address: document.getElementById('delivery-address'),
        city: document.getElementById('delivery-city'),
        zip: document.getElementById('delivery-zip')
    };
    const billingAddressFields = {
        name: document.getElementById('billing-name'),
        address: document.getElementById('billing-address'),
        city: document.getElementById('billing-city'),
        zip: document.getElementById('billing-zip')
    };

    // Check if the checkbox is checked
    if (checkbox.checked) {
        billingAddressFields.name.value = deliveryAddressFields.name.value;
        billingAddressFields.address.value = deliveryAddressFields.address.value;
        billingAddressFields.city.value = deliveryAddressFields.city.value;
        billingAddressFields.zip.value = deliveryAddressFields.zip.value;
    } else {
        // Show billing address fields
        billingAddressField.style.display = 'block';
        
        // Clear billing address fields if not using autofill
        billingAddressFields.name.value = '';
        billingAddressFields.address.value = '';
        billingAddressFields.city.value = '';
        billingAddressFields.zip.value = '';
    }
}

// Get the "same as delivery" checkbox
const sameAsDeliveryCheckbox = document.getElementById('same-as-delivery');

// Add event listener to the checkbox
sameAsDeliveryCheckbox.addEventListener('change', function() {
    toggleBillingAddress(this);
});

// Initialize billing address fields visibility
toggleBillingAddress(sameAsDeliveryCheckbox);