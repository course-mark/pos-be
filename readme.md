
# Point of Sales - Backend

This project contains APIs and Services for managing Retail point of sales billing.

## Authors

- [@manjotsk](https://www.github.com/manjotsk)
- [@sukhleensandhu](https://www.github.com/sukhleensandhu)




## Features

- Sales Processing: Quick and efficient transaction processing for various payment methods (cash, credit/debit cards, mobile payments, etc.).

- Inventory Management: Real-time tracking of stock levels, automatic reordering, and inventory alerts to prevent stockouts and overstocking.

- Customer Management: Customer relationship management (CRM) functionalities, including tracking purchase history, managing customer profiles, and loyalty programs.

- Reporting and Analytics: Detailed sales reports, inventory reports, and analytics to help businesses make data-driven decisions.

- Employee Management: Tools to manage staff schedules, track employee performance, and handle time clock functionalities.

- Receipts and Invoicing: Customizable receipt printing, digital receipts, and invoicing capabilities.

- Multi-Channel Capabilities: Support for both in-store and online sales, integrating with e-commerce platforms.

- Payment Processing: Integration with various payment gateways and processors for seamless transactions.

- Security: Robust security features to protect sensitive data, including user permissions and data encryption.

- Promotions and Discounts: Tools to create and manage promotions, discounts, and special offers.

- Integration Capabilities: Ability to integrate with other business software such as accounting systems, ERP, CRM, and e-commerce platforms.

- Mobile Access: Mobile POS solutions for sales on-the-go, useful for events, pop-up shops, and remote locations.

- Customer Support: Access to technical support and training resources to ensure the POS system runs smoothly.

## Roadmap

### Phase 1

- Product Management
    - Add Product
    - Remove Product
    - Edit Product
    - Get / List Products
    - Inventory Management
        - Add Inventory
        - Remove
        - Edit
        - Get / List
- Customer Management
    - Create Customer
    - Get Customer / List Customer
    - Archive Customer 
    - Edit Customer

- Sales Processing
    - Checkout
    - Generate Invoice
        - Generating PDF
        - Email
    
- User Management
    - Login features


### Entity Model

#### Product
- _id - ObjectId
- name - String
- description - String
- price - Number
- category - String
- brand - String
- rating - Number
- gender - String[]
- fabricType - String

#### ProductVariant

- _id - ObjectId
- productId - ObjectId #ref to Product
- color - String
- size - String

#### Inventory

- _id - ObjectId
- productId - ObjectId #ref to Product
- productVariantId - ObjectId #ref to ProductVariant
- quantity - Number

#### Customer

- _id - ObjectId
- name - String
- email - String
- phone - String
- address - String
- city - String
- state - String
- country - String
- zip - String

#### Checkout

- _id - ObjectId
- customerId - ObjectId #ref to Customer
- products - Array of Object
    - productId - ObjectId #ref to Product
    - productVariantId - ObjectId #ref to ProductVariant
    - quantity - Number
    - price - Number
- totalAmount - Number
- paymentMethod - String
- paymentStatus - String
- tax - Number
- discount - Number
- invoiceId - ObjectId #ref to Invoice

#### Invoice

- _id - ObjectId
- checkoutId - ObjectId #ref to Checkout
- invoiceNumber - String
- invoiceDate - Date
- dueDate - Date
- totalAmount - Number
- tax - Number
- discount - Number

#### User

- _id - ObjectId
- name - String
- email - String
- password - String
- role - String[]


### REST APIs

#### Product

- POST /api/v1/products
    - Create a new product
    - Body: { name, description, price, category, brand, rating, }
    - Response: { _id, name, description, price, category, brand, rating, }

- GET /api/v1/products
    - Get list of products
    - Response: [{ _id, name, description, price, category, brand, rating, }]

- GET /api/v1/products/:id
    - Get product by id
    - Response: { _id, name, description, price, category, brand, rating, }

- PUT /api/v1/products/:id
    - Update product by id
    - Body: { name, description, price, category, brand, rating, }
    - Response: { _id, name, description, price, category, brand, rating, }

- DELETE /api/v1/products/:id
    - Delete product by id
    - Response: { _id, name, description, price, category, brand, rating, }
    