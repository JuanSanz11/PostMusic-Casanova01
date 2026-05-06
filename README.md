# 🎧 PostMusic Pro - Casanova Session

**PostMusic Pro** es una plataforma de streaming de música de alta fidelidad diseñada con una estética de estudio de grabación profesional ("Studio Pro"). El proyecto está optimizado para ofrecer una experiencia visual inmersiva y técnica, inspirada en las consolas de mezcla y estaciones de trabajo de audio digital (DAW).

![PostMusic Banner](/public/logo.png)

## 🚀 Características Principales

- **Diseño Studio Pro Dark**: Interfaz ultra-moderna en modo oscuro con acentos neón (Azul Eléctrico y Ámbar Dorado).
- **Reproductor de Audio Avanzado**: Panel de control inspirado en hardware real con efectos de brillo, glassmorphism y controles intuitivos.
- **Optimización Móvil**: Rejilla responsiva de 2 columnas para dispositivos móviles, maximizando el espacio y la visibilidad de la música.
- **Gestión de Datos**: Integración completa con `json-server` para una gestión ágil de episodios y pistas musicales.
- **Aesthetic Técnica**: Cabecera con simulación de estado de sesión (24-bit/96kHz) y pie de página profesional.

## 🛠️ Tecnologías Utilizadas

- **Front-end**: [Next.js](https://nextjs.org/) (React)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Sass (SCSS)](https://sass-lang.com/) con módulos de CSS.
- **Servidor de Datos**: [JSON Server](https://github.com/typicode/json-server)
- **Consumo de API**: [Axios](https://axios-http.com/)
- **Formateo de Fechas**: [date-fns](https://date-fns.org/)

## 🏁 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/JuanSanz11/PostMusic-Casanova01.git
cd PostMusic-Casanova01
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el Servidor de Datos (Backend)
En una terminal separada, ejecuta:
```bash
npm run server
```
*El servidor correrá en `http://localhost:3333`*

### 4. Iniciar la Aplicación (Frontend)
En otra terminal, ejecuta:
```bash
npm run dev
```
*La aplicación estará disponible en `http://localhost:3000`*

## 📱 Vista Previa Móvil
El diseño se adapta automáticamente a pantallas pequeñas, transformando la lista de música en una cuadrícula compacta de 2 columnas para una navegación rápida y cómoda.

---
Creado por **Casanova** 🎵
