/**
 * LÓGICA DO FRONTEND
 * Controles:
 * - Envio de mensagens
 * - Exibição do chat
 * - Comunicação com backend
 */

// Aguarda carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    // Elementos da interface
    const inputUsuario = document.getElementById('user-input');
    const botaoEnviar = document.getElementById('send-button');
    const areaChat = document.getElementById('chat-log');

    // Eventos (clique + Enter)
    botaoEnviar.addEventListener('click', enviarMensagem);
    inputUsuario.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensagem();
    });

    // Função principal
    function enviarMensagem() {
        const texto = inputUsuario.value.trim();
        if (!texto) return;

        // Exibe mensagem do usuário imediatamente
        adicionarMensagem('user', texto);
        inputUsuario.value = '';
        
        // Mostra "digitando..."
        mostrarDigitando();
        
        // Envia para o backend
        fetch('/get_response', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: texto })
        })
        .then(resposta => resposta.json())
        .then(dados => {
            removerDigitando();
            adicionarMensagem('bot', dados.response);
        })
        .catch(erro => {
            console.error('Erro:', erro);
            removerDigitando();
            adicionarMensagem('bot', 'Erro ao responder');
        });
    }

    // Adiciona mensagem ao chat
    function adicionarMensagem(remetente, texto) {
        const divMensagem = document.createElement('div');
        divMensagem.className = `${remetente}-message`;
        
        // Formatação diferente para bot/usuário
        if (remetente === 'bot') {
            divMensagem.innerHTML = `
                <i class="fas fa-robot bot-icon"></i>
                <div>${formatarResposta(texto)}</div>
            `;
        } else {
            divMensagem.textContent = texto;
        }
        
        areaChat.appendChild(divMensagem);
        // Scroll automático
        areaChat.scrollTop = areaChat.scrollHeight;
    }

    // Formata negritos e links
    function formatarResposta(texto) {
        return texto
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Negrito
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');  // Links
    }

    // Indicador visual "digitando..."
    function mostrarDigitando() {
        const indicador = document.createElement('div');
        indicador.className = 'bot-message typing-indicator';
        indicador.innerHTML = `
            <i class="fas fa-robot bot-icon"></i>
            <div class="typing-dots"><span></span><span></span><span></span></div>
        `;
        areaChat.appendChild(indicador);
        areaChat.scrollTop = areaChat.scrollHeight;
    }

    function removerDigitando() {
        const indicador = document.querySelector('.typing-indicator');
        if (indicador) indicador.remove();
    }
});