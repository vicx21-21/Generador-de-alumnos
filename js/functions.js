var resultadoTexto = "";

const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosRusos = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];

const nombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombresFranceses = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];

function ejecutarProceso() {
    var seleccion = document.getElementById("opcion").value;

    switch (seleccion) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    resultadoTexto = "INSERT INTO alumnos VALUES ";
    var idAlumno = 224250000;
    var totalFilas = document.getElementById('registros').value;

    for (let i = 0; i < totalFilas; i++) {
        let ape1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let ape2 = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneDobleNombre = Math.random() < 0.5;
        
        let segundoApeFinal;
        if (ape2 === "NULL") {
            segundoApeFinal = "NULL";
        } else {
            segundoApeFinal = `UPPER('${ape2}')`;
        }

        let nomPrimario = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneDobleNombre) {
            let nomSecundario = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nomPrimario += ` ${nomSecundario}`;
        }

        resultadoTexto += `(${idAlumno + i},UPPER('${ape1}'), ${segundoApeFinal}, '${nomPrimario}','a${idAlumno + i}@unison.mx'),\n`;
    }

    resultadoTexto = resultadoTexto.slice(0, -3) + ";";
    document.getElementById("salida").innerHTML = resultadoTexto;
}

function generarSQLpostgresql() {
    resultadoTexto = "INSERT INTO alumnos (matricula, apellido1, apellido2, nombre, correo) VALUES \n";
    var idAlumno = 224250000;
    var totalFilas = document.getElementById('registros').value;

    for (let i = 0; i < totalFilas; i++) {
        let ape1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let ape2 = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneDobleNombre = Math.random() < 0.5;

        let segundoApeFinal;
        if (ape2 === "NULL") {
            segundoApeFinal = "NULL";
        } else {
            segundoApeFinal = `UPPER('${ape2}')`;
        }

        let nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneDobleNombre) {
            let nomFran = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombreCompleto += ` ${nomFran}`;
        }

        resultadoTexto += `(${idAlumno + i}, UPPER('${ape1}'), ${segundoApeFinal}, '${nombreCompleto}', 'a${idAlumno + i}@unison.mx')`;

        if (i < totalFilas - 1) {
            resultadoTexto += ",\n";
        } else {
            resultadoTexto += ";";
        }
    }
    document.getElementById("salida").innerHTML = resultadoTexto;
}

function generarSQLCSV() {
    resultadoTexto = "matricula, apellido1, apellido2, nombre, correo\n";
    var idAlumno = 224250000;
    var totalFilas = document.getElementById('registros').value;

    for (let i = 0; i < totalFilas; i++) {
        let ape1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let ape2 = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneDobleNombre = Math.random() < 0.5;

        let segundoApeFinal = (ape2 === "NULL") ? "NULL" : ape2;

        let nombreFinal = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneDobleNombre) {
            let nomExtra = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombreFinal += ` ${nomExtra}`;
        }

        resultadoTexto += `${idAlumno + i},${ape1},${segundoApeFinal},${nombreFinal},a${idAlumno + i}@unison.mx\n`;
    }
    document.getElementById("salida").innerHTML = resultadoTexto;
}

function generarJSON() {
    resultadoTexto = "json [<br>{<br>";
    var idAlumno = 224250000;
    var totalFilas = document.getElementById('registros').value;

    for (let i = 0; i < totalFilas; i++) {
        let ape1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let ape2 = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneDobleNombre = Math.random() < 0.5;

        let segundoApeFinal = (ape2 === "NULL") ? "NULL" : ape2;
        let nombreFinal = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        
        if (tieneDobleNombre) {
            let nomExtra = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombreFinal += ` ${nomExtra}`;
        }

        resultadoTexto += `
                "matricula": ${idAlumno + i},<br>
                "apellido1": "${ape1}",<br>
                "apellido2": "${segundoApeFinal}",<br>
                "nombre": "${nombreFinal}",<br>
                "correojson": "a${idAlumno + i}@unison.mx"<br>
                }${i < totalFilas - 1 ? ",<br>{" : "<br>"} `;
    }

    resultadoTexto += `]`;
    document.getElementById("salida").innerHTML = resultadoTexto;
}

function guardarArchivo() {
    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(resultadoTexto));

    var seleccion = document.getElementById("opcion").value;

    switch (seleccion) {
        case "1": enlaceDescarga.setAttribute("download", "alumnos_data.sql"); alert("Exportando SQL"); break;
        case "2": enlaceDescarga.setAttribute("download", "alumnos_pg.sql"); alert("Exportando Postgres"); break;
        case "3": enlaceDescarga.setAttribute("download", "alumnos_data.csv"); alert("Exportando CSV"); break;
        case "4": enlaceDescarga.setAttribute("download", "alumnos_data.json"); alert("Exportando JSON"); break;
    }

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}