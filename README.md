# 🖨️ Dro Print - Modern E-commerce Platform

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Laravel](https://img.shields.io/badge/Laravel-12-red?logo=laravel)](https://laravel.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)](https://www.docker.com/)

A modernized, high-performance e-commerce platform for printing services. This project features a sleek React-based frontend and a robust Laravel-powered backend, all containerized with Docker for seamless development and deployment.

---

## 🚀 Features

- **Modern UI/UX**: Built with React 19 and Tailwind CSS 4 for a premium, responsive feel.
- **Dynamic Content**: Product listings and categories served via a RESTful Laravel API.
- **Admin Dashboard**: Managed through Laravel Filament for easy content administration.
- **Interactive Elements**: Smooth transitions, testimonial carousels (Swiper), and modern icons (Lucide React).
- **Dockerized Environment**: One-command setup for database, backend, and frontend.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4 (Vanilla CSS architecture)
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Animations**: Custom CSS + Swiper for carousels
- **HTTP Client**: Axios

### Backend
- **Framework**: Laravel 12
- **Admin Panel**: Filament 3
- **Authentication**: Laravel Sanctum
- **Database**: MySQL 8.0
- **Environment**: PHP 8.2

---

## 📦 Getting Started

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SABBAR-ZIYAD/Dro-Print.git
   cd Dro-Print
   ```

2. **Launch with Docker**:
   ```bash
   docker-compose up --build -d
   ```

3. **Initialize the Backend**:
   ```bash
   docker exec -it droprint-backend php artisan migrate --seed
   docker exec -it droprint-backend php artisan key:generate
   ```

4. **Access the Application**:
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Backend API**: [http://localhost:8000](http://localhost:8000)
   - **Admin Dashboard**: [http://localhost:8000/admin](http://localhost:8000/admin)

---

## 📂 Project Structure

```text
.
├── DroPrintBackend/    # Laravel API & Filament Admin
├── DroPrintFront/      # React Frontend (Vite)
├── docker-compose.yml  # Docker orchestration
└── .gitignore          # Repository exclusions (excludes legacy folders)
```

---

## 📝 License

This project is licensed under the MIT License.

---

*Built with ❤️ for Dro Print.*
