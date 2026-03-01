
# Migración de Fix a Trip Puerto Rico — WordPress a React

## Resumen
Clonar el sitio de tours turísticos de Puerto Rico (fixatrippuertorico.com) a una aplicación moderna en React, replicando su diseño visual y estructura.

## Páginas y Secciones

### 1. Página Principal (Home)
- **Header/Navbar**: Logo de Fix a Trip, menú de navegación (Experiences, Fix a Boat, Fix a Chef, Fix a Transport, Fix a Wellness), botón de búsqueda, y botón "Contact" naranja
- **Hero Section**: Imagen de fondo de playa tropical con título "Book Unique Experiences", subtítulo, y barra de búsqueda de tours
- **Sección "About"**: Título "Fix a Trip to Puerto Rico: Enjoy the Perfect Vacation" con descripción, íconos de "Expert Travel Agents" y "Travel Guidelines", número de teléfono, botón "Explore Activities", e imagen de bandera de PR
- **Categorías**: Grid de 5 categorías con imágenes (Adventure, Boat Trips, City/Nightlife, Foodie/Culture, Nature)
- **Tour Destacado**: Card grande del tour "Off the Beaten Path El Yunque" con rating 4.9, precio $85, duración, edad mínima
- **Best-Selling Tours**: Grid/carousel de 11 tour cards con imagen, rating, nombre, duración, ubicación y precio
- **Popular Places**: Carousel horizontal de destinos (Luquillo, Vieques, Icacos, Old San Juan, Yunque, Culebra, Fajardo) con imagen y cantidad de tours
- **Sección de Reviews**: Testimonios de viajeros reales
- **Footer**: Logo, redes sociales (Facebook, Instagram), copyright

### 2. Página de Contacto
- Formulario de contacto básico

### 3. Página de Tours/Experiencias
- Listado de todos los tours disponibles con filtros por categoría

### 4. Página de Detalle de Tour
- Información completa del tour: imágenes, descripción, precio, duración, edad, ubicación, botón de reserva

## Diseño Visual
- **Colores**: Fondo blanco, texto oscuro, acentos en naranja (#FF6B35 aprox), badges y botones naranjas
- **Tipografía**: Fuentes sans-serif modernas, títulos bold
- **Estilo**: Limpio, con bordes redondeados, sombras suaves en cards, mucho uso de imágenes de alta calidad
- **Responsive**: Diseño adaptado a móvil con menú hamburguesa

## Datos
- Los tours se guardarán como datos estáticos (JSON) con toda la información extraída del sitio (nombre, precio, duración, ubicación, rating, imagen, categoría, descripción)
- Las imágenes se enlazarán directamente desde el sitio WordPress original inicialmente

## Funcionalidades
- Navegación entre páginas con React Router
- Búsqueda de tours por nombre
- Filtrado por categorías y ubicaciones
- Carousel de tours y destinos populares
- Cards de tours interactivas con hover effects
- Diseño responsive completo
- Scroll suave y botón "go to top"
