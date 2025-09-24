# my-vCard

vCard / Portafolio personal construido con **React 18** y **Vite**. Este proyecto utiliza una **estructura modular** en `src/` que contiene componentes reutilizables, estilos en `src/assets/css/` y scripts en `src/assets/js/`.

---

## Tecnologías

- **React 18**  
  - [src/main.jsx](src/main.jsx)  
  - [src/app.jsx](src/app.jsx)
- **Vite**  
  - [vite.config.ts](vite.config.ts)
- **TypeScript** (configurado en el proyecto)  
  - Archivos de configuración: [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)
- **CSS** y assets en `src/assets/`
- **Scripts DOM auxiliares:**  
  - [src/assets/js/script.tsx](src/assets/js/script.tsx) — versión TypeScript que inicializa la navegación  
  - [src/assets/js/script.js](src/assets/js/script.js) — versión JavaScript original

---

## Estructura principal

src/
├─ app.jsx # Punto de entrada de la app
├─ main.jsx # Montaje del DOM
├─ components/ # Componentes React (About, Navbar, Sidebar, Resume, Portfolio, Blog, Contact, etc.)
├─ assets/
│ ├─ css/ # Estilos (style.css, modal-animations.css)
│ ├─ img/ # Imágenes
│ └─ js/ # Scripts (script.tsx, script.js)

yaml
Copiar código

---

## Requisitos

- Node.js 18+ (recomendado)
- npm / pnpm / yarn

---

## Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
Entrar a la carpeta del proyecto:

bash
Copiar código
cd my-vcard
Instalar dependencias:

bash
Copiar código
npm install
Ejecutar el proyecto en modo desarrollo:

bash
Copiar código
npm run dev