window.addEventListener("load", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio === 1) { 
                // Elemento 100% visível
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden");
            } else if (entry.intersectionRatio === 0) {
                // Elemento 100% fora da tela
                entry.target.classList.remove("show");
                entry.target.classList.add("hidden");
            }
        });
    }, { threshold: [0, 1] }); // Verifica quando o elemento está 0% e 100% visível

    /*
    threshold	Quando usar?
        0	Quando quiser detectar a entrada/saída do elemento da tela. Ideal para lazy loading.
        0.5	Para ativar algo quando metade do elemento está visível. Útil para animações suaves.
        1	Para garantir que o elemento está 100% visível antes de ativar a ação.
    */
    
    // Seleciona os elementos a serem observados
    const elementos = document.querySelectorAll(".imgScroll");
    
    // Observa cada elemento
    elementos.forEach(elemento => observer.observe(elemento));

});