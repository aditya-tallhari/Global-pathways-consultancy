
# Global Pathways — Study Abroad Consultancy Website

A modern, professional, and fully responsive static website built with **React.js** for a fictional study abroad consultancy named **Global Pathways**.

This site showcases consultancy services and encourages visitors to get in touch through a clean interface, WhatsApp chat button, and modern animations.

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages](#-pages)
- [Installation](#-installation)
- [WhatsApp Button Setup](#-whatsapp-button-setup)
- [Author](#-author)

---

## Features

- Built with **React.js**
- **Tailwind CSS** for modern, responsive styling
- **Multi-page routing** with React Router DOM
- Clean, pastel-based UI with scroll animations
- Smooth scroll behavior using **Framer Motion**
- Fully mobile responsive layout
- **WhatsApp chat button**


---

## Tech Stack

- React.js
- Tailwind CSS
- React Router DOM
- Framer Motion
- Font Awesome / Heroicons

---

## Pages

| Page     | Description |
|----------|-------------|
| **Home** | Hero banner, services overview, testimonials, and CTA |
| **About** | Mission, vision, team profiles, and timeline |
| **Services** | Card-based service listing |
| **Contact** | Contact form (static or third-party), WhatsApp button, Google Map, contact details |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/global-pathways-website.git
cd global-pathways-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm start
```

The site will be available at `http://localhost:3000`.

---

## 💬 WhatsApp Button Setup

In your `Contact.js` or `App.js`, use the following:

```jsx
<a
  href="https://wa.me/917972163624?text=Hi%20Global%20Pathways%2C%20I'm%20interested%20in%20studying%20abroad"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
    Chat on WhatsApp
  </button>
</a>
```

✅ Replace `917972163624` with your actual WhatsApp number and message.

---

## 🤝 Contributing

Pull requests are welcome. For significant changes, please open an issue first.

---

## 👨‍💻 Author

**Aditya Tallhari**  
[GitHub](https://github.com/aditya-tallhari)

---
