document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Anular envio padrão
        event.preventDefault();

        // Obter os campos
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validação
        if (name && email && message) {
            alert(
                "Mensagem enviada com sucesso!\n\n" +
                "Nome: " + name + "\nEmail: " + email + "\nMensagem: " + message
            );
        // Limpa o formulário
            form.reset(); 
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});