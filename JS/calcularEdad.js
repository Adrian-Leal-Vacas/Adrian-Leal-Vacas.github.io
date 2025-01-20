// Fecha fija de nacimiento
        const birthdate = new Date(2004, 3, 6); // Mes 3 = abril (0 indexado)

        // Función para calcular la edad
        function calculateAge(birthdate) {
            const today = new Date();
            let age = today.getFullYear() - birthdate.getFullYear();
            const monthDifference = today.getMonth() - birthdate.getMonth();

            // Ajustar si el cumpleaños aún no ha ocurrido este año
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }

            return age;
        }

        // Calcular la edad y mostrarla
        const age = calculateAge(birthdate);
        const result = document.getElementById("edad");
        result.textContent = `${age}`;