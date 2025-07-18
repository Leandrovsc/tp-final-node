# TRABAJO FINAL DE LA ASIGNATURA
## Introducción     
Es la creacion de un crud con base de datos en firebase usando la libreria de firebase-admin y express. todo en base de  la tecnologia de node.js.
## Instalación
1. ``npm install`` para instalar las dependencias del proyecto.
2. ``npm start`` para iniciar el servidor.
3. Acceder a ``http://localhost:3300`` para ver la aplicación en funcionamiento

mi-proyecto-crud-node-firebase/
├── node_modules/           # Módulos de Node.js (instalados con npm)
├── src/                    # Código fuente 
│   ├── config/             # Archivos de configuración
│   │   ├── firebase.js     # Configuración de Firebase Admin SDK
│   │   └── index.js        # Variables de entorno u otras configs generales
│   │
│   ├── controllers/        # Lógica de negocio (qué hacer con las peticiones)
│   │   ├── authController.js   # Lógica para registro, login, token
│   │   └── productController.js # Lógica para CRUD de productos (ejemplo)
│   │
│   ├── middlewares/        # Funciones que se ejecutan antes de los controladores
│   │   └── authMiddleware.js   # Verificación de token JWT
│   │
│   ├── models/             # Modelos de datos (cómo se ven tus datos en Firestore)
│   │   └── productModel.js     # Definición de un modelo de producto (ejemplo)
│   │
│   ├── routes/             # Definición de las rutas de tu API
│   │   ├── authRoutes.js       # Rutas para autenticación (login, registro)
│   │   └── productRoutes.js    # Rutas para CRUD de productos
│   │
│   ├── services/           # Lógica para interactuar con Firebase/otras APIs externas
│   │   ├── authService.js      # Servicios de autenticación (Firebase Auth)
│   │   └── firestoreService.js # Funciones para interactuar con Firestore
│   │
│   └── app.js              # Archivo principal de tu aplicación Express
│
├── .env                    # Variables de entorno (¡NO SUBIR A GIT!)
├── .gitignore              # Archivo para ignorar carpetas y archivos en Git
├── package.json            # Información del proyecto y dependencias
├── package-lock.json       # Bloqueo de dependencias (generado por npm)
└── README.md               # Documentación del proyecto