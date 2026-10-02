Generador de Datos de Alumnos
Herramienta web sencilla para generar datos ficticios de alumnos (matrícula, nombres, apellidos y correo institucional) y exportarlos rápidamente a distintos 
formatos para bases de datos o pruebas.
🚀 Características
Generación personalizada: Eliges cuántos registros quieres crear en un solo clic.
Formato de datos reales:
Matrícula: Autoincremental desde 224250000.
Nombres y Apellidos: Combinación aleatoria de nombres mexicanos, franceses y apellidos mexicanos y rusos.
Correo institucional: Generado automáticamente (a[matricula]@unison.mx).
Formatos de exportación:
SQL Estándar (INSERT INTO alumnos ...)
SQL PostgreSQL (INSERT INTO alumnos (matricula, ...) ...)
CSV (matricula, apellido1, apellido2, ...)
JSON ([ { "matricula": ... } ])
📂 Estructura del proyecto
.
├── generador.html  # Interfaz del usuario
├── js/             # Archivos con la lógica JavaScript (generación y descarga)
└── fondooo.jpg     # Fondo de la aplicación


🛠️ ¿Cómo usarlo?
Descarga o clona el repositorio.
Abre el archivo generador.html en tu navegador favorito.
Ingresa la cantidad de alumnos a generar.
Selecciona el formato de salida deseado (SQL, PostgreSQL, CSV o JSON) y presiona el botón para procesar.
Usa el botón de guardar para descargar el archivo listo (.sql, .csv o .json).
