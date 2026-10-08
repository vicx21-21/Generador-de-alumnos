# Generador de Datos de Alumnos

Herramienta web interactiva para generar datos ficticios de alumnos (matrículas, nombres compuestos y apellidos) y exportarlos fácilmente en distintos formatos.

## 🚀 Características

* **Generación Personalizada**: Elige la cantidad exacta de registros a generar.
* **Formatos de Salida**:
  * **SQL General**: Sentencias `INSERT INTO` genéricas.
  * **PostgreSQL**: Sentencias con sintaxis compatible para PostgreSQL (`UPPER`).
  * **CSV**: Formato separado por comas ideal para hojas de cálculo.
  * **JSON**: Estructura de objetos válida para APIs o bases de datos NoSQL.
* **Descarga Automática**: Permite guardar los datos generados directamente en un archivo (.sql, .csv, .json).

  imagen
  <img width="1251" height="688" alt="image" src="https://github.com/user-attachments/assets/48f4ad80-3960-4ddf-a78c-44dee4191948" />


## 🛠️ Archivos del Proyecto

* `generador.html` - Interfaz principal de la aplicación.
* `js/` - Scripts de lógica para la generación de nombres, apellidos y formatos.
* `fondooo.jpg` - Estilo visual e imagen de fondo.

## 🏃‍♂️ ¿Cómo Usarlo?

1. Clona o descarga el repositorio.
2. Abre el archivo `generador.html` directamente en tu navegador.
3. Ingresa la cantidad de registros deseados y selecciona el formato de salida.
4. Presiona el botón para generar y exportar el archivo.
