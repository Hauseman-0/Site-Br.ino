document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.botao-tutorial').addEventListener('click', (event) => {
        event.preventDefault();  // Previne o comportamento padrão do link
        alert("Você será redirecionado para a página de tutoriais.");
        // Redireciona para a página de tutoriais (substitua a URL pelo destino real)
        window.location.href = "pagina_tutoriais.html";
    });
});