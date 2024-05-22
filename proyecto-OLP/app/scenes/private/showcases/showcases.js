import styles from './showcases.css'
import panel from '../../../assets/iconos-menu/panel.jpeg'

export function Showcases() {
  const pageContent = `
    <h3>Tips</h3>
    <button id="my-btn">Click me please!</button>
    <div class='${styles.modal}' id='modal'>
      <div class='${styles.modal_container}'>
        <img src ='${panel}' class='${styles.modal_image}'>
        <h2 class='${styles.modal_title}'>Consejos para el desafio de programcion</h2>
        <p class='${styles.modal_paragraph}'>1.Asegúrate de comprender la estructura básica de un documento HTML, que incluye las etiquetas html</p>
        <p>2. Aprende a crear formularios usando etiquetas como</p>
        <a href='#' class='${styles.modal_close}' id='close_modal'>Cerrar</a>
      </div>
    </div> 
  `;

  const logic = () => {
    const myBtn = document.getElementById('my-btn');
    const modal = document.querySelector('#modal')
    const modalClose=document.querySelector('#close_modal')
    myBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add(`${styles['show']}`);
    });
    modalClose.addEventListener('click', () => {
      modal.classList.remove(`${styles['show']}`)
    })

    
  }

  return {
    pageContent,
    logic
  }
}