
# Point of Sales - Backend

This project contains APIs and Services for managing Retail point of sales billing.

## Authors

- [@manjotsk](https://www.github.com/manjotsk)
- [@sukhleensandhu](https://www.github.com/sukhleensandhu)


## Project initialization

```bash
npx typescript-express-starter
```


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
- status - String #enum ['active', 'archived']

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
    - Body: { name, description, price, category, brand, rating, varient :[{
        color, size
    }] }
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

#### ProductVariant

- POST /api/v1/products/:productId/variants
    - Create a new product variant
    - Body: { color, size }
    - Response: { _id, productId, color, size }

- GET /api/v1/products/:productId/variants
    - Get list of product variants
    - Response: [{ _id, productId, color, size }]

- GET /api/v1/products/:productId/variants/:id
    - Get product variant by id
    - Response: { _id, productId, color, size }

- PUT /api/v1/products/:productId/variants/:id
    - Update product variant by id
    - Body: { color, size }
    - Response: { _id, productId, color, size }

- DELETE /api/v1/products/:productId/variants/:id
    - Delete product variant by id
    - Response: { _id, productId, color, size }

#### Inventory

- GET /api/v1/inventory
    - Get list of inventory
    - Query: { productId, productVariantId }
    - Response: [{ _id, productId, productVariantId, quantity }]

- PUT /api/v1/inventory/:id
    - Update inventory by id
    - Body: { quantity, action: 'add' | 'remove'}
    - Response: { _id, productId, productVariantId, quantity }

#### Customer

- POST /api/v1/customers
    - Create a new customer
    - Body: { name, email, phone, address, city, state, country, zip }
    - Response: { _id, name, email, phone, address, city, state, country, zip }

- GET /api/v1/customers
    - Get list of customers
    - Response: [{ _id, name, email, phone, address, city, state, country, zip, status }]

- GET /api/v1/customers/:id
    - Get customer by id
    - Response: { _id, name, email, phone, address, city, state, country, zip, status }

- PUT /api/v1/customers/:id
    - Update customer by id
    - Body: { name, email, phone, address, city, state, country, zip, status }
    - Response: { _id, name, email, phone, address, city, state, country, zip }

- DELETE /api/v1/customers/:id
    - Delete customer by id
    - Response: { _id, name, email, phone, address, city, state, country, zip }

#### Checkout

- POST /api/v1/checkout
    - Create a new checkout
    - Body: { customerId, products: [{ productId, productVariantId, quantity, price }], paymentMethod }
    - Response: { _id, customerId, products, totalAmount, paymentMethod, paymentStatus, tax, discount, invoiceId }

- GET /api/v1/checkout
    - Get list of checkouts
    - Response: [{ _id, customerId, products, totalAmount, paymentMethod, paymentStatus, tax, discount, invoiceId }]

- GET /api/v1/checkout/:id
    - Get checkout by id
    - Response: { _id, customerId, products, totalAmount, paymentMethod, paymentStatus, tax, discount, invoiceId }

#### Invoice

- POST /api/v1/invoice
    - Create a new invoice
    - Body: { checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }
    - Response: { _id, checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }

- GET /api/v1/invoice
    - Get list of invoices
    - Response: [{ _id, checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }]

- GET /api/v1/invoice/:id
    - Get invoice by id
    - Response: { _id, checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }

#### User / Auth

- POST /api/v1/login
    - Login user
    - Body: { email, password }
    - Response: { _id, name, email, role }

- PATCH /api/v1/forgot-password
    - Forgot password
    - Body: { email }
    - Response: { message: 'Password reset link sent to your email' }

- PATCH /api/v1/forgot-password/:token
    - Reset password
    - Body: { password }
    - Response: { message: 'Password reset successfully' }
