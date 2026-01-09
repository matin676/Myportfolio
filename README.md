# Matin Imam - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Features

- **Modern Dark Theme** - Glassmorphism effects with smooth gradients
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion
- **Interactive Navbar** - Active scroll highlighting, mobile hamburger menu
- **Contact Form** - EmailJS integration for direct messaging

### Sections

- **Home** - Hero section with call-to-action
- **About** - Professional biography with MI logo art
- **Experience** - Timeline of work history and education
- **Skills** - Categorized technical skills grid
- **Projects** - Portfolio showcase with GitHub links
- **Contact** - Functional contact form

## 🛠️ Tech Stack

| Category   | Technologies                    |
| ---------- | ------------------------------- |
| Frontend   | React.js, Vite                  |
| Styling    | CSS3 (Variables, Grid, Flexbox) |
| Animations | Framer Motion                   |
| Icons      | React Icons                     |
| Contact    | EmailJS                         |

## 🏃‍♂️ Getting Started

```bash
# Clone
git clone https://github.com/matin676/Myportfolio.git
cd Myportfolio

# Install
npm install

# Setup .env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key

# Run
npm run dev
```

## 📦 Deployment

```bash
npm run build
```

Deploy to **Vercel** or **Netlify**. Add environment variables in the platform dashboard.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          # Static images (MI logo, projects)
├── src/
│   ├── components/      # Navbar, Preloader
│   ├── pages/           # Home, About, Experience, Skills, Projects, Contact
│   ├── App.jsx
│   └── App.css
└── .env                 # EmailJS credentials
```

## 📄 License

MIT License - [Matin Imam](https://github.com/matin676)
