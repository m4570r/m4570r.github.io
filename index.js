const endpointURL = "http://181.172.228.80/CodeChallenge/Dentidesk-Code-Challenge-Administrador-Financiero/api/v1/2023/index.php?comando=transactions";

function loadTable() {
    fetch(endpointURL)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#transactionTable tbody");
            tableBody.innerHTML = "";

            data.forEach(transaction => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${transaction.id}</td>
                    <td>${transaction.description}</td>
                    <td>${transaction.amount}</td>
                    <td>${transaction.type}</td>
                    <td>${transaction.date}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
}

// Cargar la tabla al cargar la página
loadTable();
