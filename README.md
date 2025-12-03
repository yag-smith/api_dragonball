🚀 Proyecto: API DRAGON BALL - SPA

Este proyecto es una Single Page Application (SPA) desarrollada como examen final. El objetivo principal es demostrar la capacidad de construir una aplicación moderna utilizando un stack robusto de React, gestionar el estado de manera eficiente con Zustand, e interactuar con una API externa.

📝 API Externa Utilizada

Para el consumo de datos, se utilizó la siguiente API pública:

API: Dragon ball

URL Base: [Pegar la URL base de la API, ej: https://dragonball-api.com/api/characters]

🛠️ Stack Tecnológico Obligatorio

El proyecto se construyó siguiendo las especificaciones del examen:

Herramienta

Propósito

React + Vite

Framework principal y herramienta de construcción ultra-rápida.

Zustand

Gestión del estado global, usado en la página Home y en la de Contacto.

React Router DOM

Manejo de las rutas y estructura de la aplicación a través de layouts.

Bootstrap

Librería de estilos CSS para asegurar un diseño responsivo y profesional.

Lenguaje

JavaScript (JS) para maximizar la velocidad de desarrollo.

📁 Estructura del Proyecto

La organización del código sigue la estructura requerida, facilitando la escalabilidad y el mantenimiento:

src/
├── components/   # Componentes reusables (Card, Header, Footer, etc.)
├── layouts/      # Estructura principal de la aplicación (RootLayout)
├── pages/        # Componentes de las vistas principales (Home, Entities, Contact)
├── store/        # Lógica de gestión de estado global (Zustand)
├── App.jsx
└── main.jsx


🌐 Módulos y Funcionalidad

Ruta

Componente

Requisitos Cumplidos

/ (Home)

Home.jsx

Hero Section, Navbar, Footer, CardList con 6+ elementos (obtenidos de Zustand).

/entities

Entities.jsx

Consumo de API, Paginación funcional (botones Prev / Next), Renderizado de lista completa.

/contact

Contact.jsx

Formulario de 3 campos, Validación básica (Nombre/Email requeridos), Mensaje de éxito (gestionado por Zustand).

⚙️ Instalación y Ejecución Local

Sigue estos pasos para clonar el repositorio y levantar el proyecto en tu máquina local:

Clonar el repositorio:

git clone (https://github.com/yag-smith/api_dragonball.git)


Instalar todas las dependencias:

npm install


Iniciar el servidor de desarrollo:

npm run dev


El proyecto estará disponible en la dirección local que muestre la terminal (generalmente http://localhost:5173/).

🔗 Enlaces Importantes
----------------------------------------------------------------------
----------------------------------------------------------------------
DEPLEGADO
https://apidragonball-qh90h5t88-yairaraujo-9154s-projects.vercel.app/
----------------------------------------------------------------------
----------------------------------------------------------------------
AUTOR:Araujo Gabriel Yair Smith

