function playSound(e) {
    // Seleciona o áudio e a tecla correspondente ao código da tecla pressionada
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Para a função se não houver áudio para aquela tecla

    audio.currentTime = 0; // Reseta o áudio para o início (permite tocar várias vezes seguidas)
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Pula se não for uma transição de transform
    this.classList.remove('playing');
}

// Escuta por qualquer tecla pressionada na janela
window.addEventListener('keydown', playSound);

// Escuta o fim da transição CSS para remover o efeito visual
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));