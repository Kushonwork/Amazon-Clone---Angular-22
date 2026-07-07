
# 🛒 Amazon Clone — Angular 22

A modern full-stack Amazon-inspired e-commerce web application built using **Angular 22**, **TypeScript**, **Angular Material**, **Angular Signals**, **RxJS**, and **JSON Server**.

The project recreates the core shopping experience of Amazon while focusing on modern Angular architecture, reusable components, reactive state management, authentication flow, cart management, checkout processing, and responsive UI design.

> This project was developed as a practical implementation of modern Angular concepts and full-stack application architecture.

You Can Access This project on: https://amazon-clone-angular-22.vercel.app/


---

## 📌 Project Overview

The Amazon Clone is a feature-rich Single Page Application (SPA) that demonstrates how a modern e-commerce frontend can be structured using Angular.

The application allows users to:

- Browse products
- View detailed product information
- Register and log in
- Add products to the shopping cart
- Modify product quantities
- Remove products from the cart
- View dynamically calculated cart totals
- Access protected routes
- Complete a checkout form
- Place orders
- View related products
- Navigate through a responsive Amazon-inspired interface

The project follows a **feature-based architecture** with standalone Angular components and service-based state management.

---

## ✨ Features

### 🏠 Home Page

- Amazon-inspired responsive layout
- Hero image slider
- Shopping category cards
- Product grid
- Responsive 4-column product layout
- Reusable product cards
- Product ratings
- Pricing information
- Prime-style product indicators
- Add-to-cart functionality

---

### 🔍 Product Details

- Dynamic product routing
- Product information loaded using route parameters
- Product image display
- Pricing and rating information
- Product availability status
- Quantity selection
- Add-to-cart functionality
- Authentication validation
- Related products section

Example route:

```text
/products/:id
````


### 👤 Authentication

* User registration
* User login
* Authentication state management
* Login persistence
* Protected application routes
* Automatic login redirection
* Authentication validation before adding products to cart

Unauthenticated users attempting protected actions are redirected to the login page.

---

### 🛒 Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products
* Dynamic cart item count
* Automatic subtotal calculation
* Persistent shared cart state
* Reusable cart item components
* Reusable cart summary component

---

### 💳 Checkout

* Protected checkout route
* Reactive Forms implementation
* Delivery address form
* Form validation
* Payment method selection
* Order summary
* Dynamic cart total
* Order placement
* Cart clearing after successful order placement
* Order confirmation workflow

---

### 🧭 Navigation

* Angular Router
* Dynamic route parameters
* Lazy-loaded standalone components
* Authentication route guards
* Programmatic navigation
* RouterLink navigation

---

### 🎨 User Interface

* Amazon-inspired UI
* Angular Material components
* Responsive product grid
* Responsive header
* Amazon-style checkout header
* Product cards with consistent dimensions
* Hero slider
* Shopping category cards
* Responsive footer
* Mobile and tablet support

---

## 🛠️ Technology Stack

| Technology             | Purpose                          |
| ---------------------- | -------------------------------- |
| Angular 22             | Frontend framework               |
| TypeScript             | Application programming language |
| HTML5                  | Application structure            |
| CSS3                   | Styling and responsive layouts   |
| Angular Material       | UI components                    |
| Angular Signals        | Reactive state management        |
| RxJS                   | Asynchronous data handling       |
| Angular Router         | Client-side navigation           |
| Angular Reactive Forms | Form management and validation   |
| HttpClient             | Backend API communication        |
| JSON Server            | Development REST API             |
| Git                    | Version control                  |
| GitHub                 | Source code hosting              |

---

## 🏗️ Application Architecture

The project follows a:

**Feature-Based Monolithic SPA Architecture with Standalone Components and Service-Oriented State Management.**

The primary application flow is:

```text
User Interface
      │
      ▼
Angular Components
      │
      ▼
Angular Services
      │
      ├──────────────► Angular Signals
      │
      └──────────────► HttpClient
                             │
                             ▼
                       JSON Server API
```

The architecture separates:

* Presentation logic
* Business logic
* State management
* HTTP communication
* Routing
* Domain models

---

## 📂 Project Structure

```text
src/
│
├── app/
│   │
│   ├── core/
│   │   │
│   │   ├── api/
│   │   │   └── api.config.ts
│   │   │
│   │   ├── guards/
│   │   │   └── auth-guard.ts
│   │   │
│   │   ├── interceptors/
│   │   │
│   │   └── services/
│   │       ├── auth.ts
│   │       ├── cart.ts
│   │       └── product.ts
│   │
│   ├── features/
│   │   │
│   │   ├── auth/
│   │   │   └── pages/
│   │   │       ├── login/
│   │   │       └── register/
│   │   │
│   │   ├── cart/
│   │   │   ├── components/
│   │   │   │   ├── cart-item/
│   │   │   │   └── cart-summary/
│   │   │   │
│   │   │   └── pages/
│   │   │       └── cart/
│   │   │
│   │   ├── checkout/
│   │   │   └── pages/
│   │   │       └── checkout/
│   │   │
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── banner/
│   │   │   │   ├── product-card/
│   │   │   │   └── product-grid/
│   │   │   │
│   │   │   └── pages/
│   │   │       └── home/
│   │   │
│   │   └── products/
│   │       └── pages/
│   │           └── product-details/
│   │
│   ├── layouts/
│   │   ├── footer/
│   │   └── header/
│   │
│   ├── models/
│   │   ├── cart-item.ts
│   │   ├── order.ts
│   │   ├── product.ts
│   │   └── user.ts
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── hero-slider/
│   │       └── shopping-cards/
│   │
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
│
├── main.ts
└── styles.css
```

---

## 🧩 Angular Concepts Implemented

This project demonstrates practical implementation of several modern Angular concepts.

### Standalone Components

The application uses Angular's modern standalone component architecture instead of traditional NgModules.

```typescript
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    ProductCard
  ],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {
  products = input.required<Product[]>();
}
```

---

### Dependency Injection

Angular's `inject()` API is used to access services.

```typescript
private productService = inject(ProductService);
private cartService = inject(CartService);
private router = inject(Router);
```

---

### Angular Signals

Signals are used for reactive application state.

```typescript
private cartItems = signal<CartItem[]>([]);

readonly cart = this.cartItems.asReadonly();
```

Derived state can be calculated using computed signals.

```typescript
totalPrice = computed(() =>
  this.cartItems().reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  )
);
```

---

### Signal Inputs

Modern Angular signal inputs are used for component communication.

```typescript
products = input.required<Product[]>();
```

Parent component:

```html
<app-product-grid
  [products]="products">
</app-product-grid>
```

---

### Modern Angular Control Flow

The project uses Angular's modern template control flow.

```html
@for (product of products(); track product.id) {

  <app-product-card
    [product]="product">
  </app-product-card>

}
```

Conditional rendering:

```html
@if (placingOrder) {

  Placing your order...

} @else {

  Place your order

}
```

---

### Angular Routing

Dynamic product routes are implemented using route parameters.

```typescript
{
  path: 'products/:id',
  loadComponent: () =>
    import(
      './features/products/pages/product-details/product-details'
    ).then(component => component.ProductDetails)
}
```

---

### Lazy Loading

Standalone components are lazy loaded using:

```typescript
loadComponent()
```

This improves application loading performance by loading feature code only when required.

---

### Reactive Forms

The checkout process uses Angular Reactive Forms.

```html
<form [formGroup]="addressForm">
```

Form controls:

```html
<input
  type="text"
  formControlName="fullName">
```

---

### Route Guards

Authentication guards prevent unauthorized access to protected routes.

```text
Navigation Request
        │
        ▼
Authentication Guard
        │
        ▼
Is User Authenticated?
       / \
      /   \
    Yes    No
     │      │
     ▼      ▼
 Continue  Redirect
           to Login
```

---

## 🔄 Application Data Flow

The primary data flow follows:

```text
JSON Server
     │
     ▼
HttpClient
     │
     ▼
Angular Service
     │
     ▼
Observable / Signal
     │
     ▼
Angular Component
     │
     ▼
HTML Template
     │
     ▼
User Interaction
     │
     ▼
Service Method
     │
     ▼
State Mutation
     │
     ▼
Automatic UI Update
```

---

## 🛒 Cart State Flow

```text
User clicks Add to Cart
          │
          ▼
Authentication Check
          │
       ┌──┴──┐
       │     │
 Logged In  Not Logged In
       │     │
       ▼     ▼
 CartService  Login Page
       │
       ▼
Check Existing Product
       │
    ┌──┴──┐
    │     │
 Existing New
    │     │
    ▼     ▼
Increase Add Product
Quantity
    │     │
    └──┬──┘
       ▼
Update Signal State
       │
       ▼
Automatic UI Update
       │
       ├── Header Cart Count
       ├── Cart Page
       └── Checkout Summary
```

---

## 🌐 API Endpoints

The development backend uses JSON Server.

| Method | Endpoint        | Purpose                     |
| ------ | --------------- | --------------------------- |
| GET    | `/products`     | Retrieve products           |
| GET    | `/products/:id` | Retrieve individual product |
| POST   | `/products`     | Create product              |
| GET    | `/users`        | Retrieve users              |
| POST   | `/users`        | Register user               |
| GET    | `/cart`         | Retrieve cart               |
| POST   | `/cart`         | Add cart item               |
| PATCH  | `/cart/:id`     | Update cart item            |
| DELETE | `/cart/:id`     | Remove cart item            |
| GET    | `/orders`       | Retrieve orders             |
| POST   | `/orders`       | Create order                |

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure the following software is installed:

* Node.js
* npm
* Angular CLI
* Git

Check your installed versions:

```bash
node --version
npm --version
ng version
git --version
```

---

### Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd amazon-clone-22
```

---

### Install Dependencies

```bash
npm install
```

---

## 🗄️ Starting the JSON Server Backend

The application uses `db.json` as its development database.

Start JSON Server:

```bash
npx json-server db.json
```

The API will run at:

```text
http://localhost:3000
```

Example products endpoint:

```text
http://localhost:3000/products
```

---

## 🚀 Starting the Angular Application

Open another terminal and run:

```bash
ng serve
```

If Angular CLI is not globally available:

```bash
npx ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

---

## 🏭 Production Build

Generate a production build using:

```bash
ng build
```

The optimized application files will be generated inside the Angular build output directory.

---

## 🔐 Security Considerations

This project uses JSON Server for educational and development purposes.

The authentication implementation is **not intended for real production environments**.

A production implementation should include:

* Secure backend authentication
* Password hashing
* HTTPS
* JWT or secure session authentication
* Server-side authorization
* Secure database storage
* Input validation
* Protected API endpoints
* Secure token handling

Client-side Angular route guards improve navigation control but do not replace backend authorization.

---

## 📈 Future Improvements

Potential future enhancements include:

* Real production backend
* JWT authentication
* Payment gateway integration
* Product search functionality
* Product filtering and sorting
* Product categories
* User profiles
* Order history
* Wishlist persistence
* Admin dashboard
* Product inventory management
* Unit testing improvements
* End-to-end testing
* Global HTTP error interceptor
* Loading state interceptor
* Server-side rendering

---

## 🎯 Learning Objectives

This project was created to gain practical experience with:

* Modern Angular architecture
* Standalone components
* Feature-based project organization
* Component communication
* Dependency injection
* Angular services
* Angular Signals
* Computed state
* RxJS Observables
* HttpClient
* REST API integration
* Angular Router
* Dynamic route parameters
* Lazy loading
* Authentication guards
* Reactive Forms
* Form validation
* Angular Material
* Responsive web design
* E-commerce application architecture

---

## 📸 Screenshots

Add your project screenshots here after uploading them to a `screenshots` folder.

Example:

```markdown
![Home Page](screenshots/home.png)

![Product Details](screenshots/product-details.png)

![Shopping Cart](screenshots/cart.png)

![Checkout](screenshots/checkout.png)
```

---

## 👨‍💻 Author

**Kushagra Agarwal**

Computer Science Engineering Student and Full-Stack Developer.

Areas of interest include:

* Full-Stack Development
* Angular
* Internet of Things
* Robotics
* Artificial Intelligence
* Edge AI

---

## 📄 License

This project is intended for educational and portfolio purposes.

Amazon and related trademarks, logos, and brand assets belong to their respective owners. This project is not affiliated with, endorsed by, or sponsored by Amazon.

---

## Copyright

Copyright © 2026 Kushagra Agarwal. All rights reserved.

This repository and its source code are provided for viewing and portfolio evaluation purposes only.

No permission is granted to copy, modify, distribute, sublicense, or use this source code, in whole or in part, for commercial, academic, or personal projects without prior written permission from the author.

Unauthorized reproduction or redistribution of this project or any substantial portion of its source code is prohibited.
```
