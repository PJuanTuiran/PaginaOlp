import styles from './showcases.css'
import panel from '../../../assets/iconos-menu/panel.jpeg'
import htmlChallenge from '../../../assets/iconos-menu/htmlChallenge.jpeg'
import bulb from '../../../assets/iconos-menu/bulb.png'

export function Showcases() {
  const pageContent = `
    <h3>Tips</h3>
    <div class='${styles.bganimation}' id='bganimation'>
      <div class='${styles.backgroundanimation}' id='backgroundAnimation'></div>
    </div>  
      
    <div class='${styles.container_challenge}'>
      <div class='${styles.container_image}'>
        <img class='${styles.image}' src='${htmlChallenge}'>
      </div>
      <div class='${styles.flex_text}'>
        <h2 class='${styles.title}'>Completa el siguiente reto</h2>
        <hr>
        <div class='${styles.flex_goals_challenge}'>
          <h3>Fundamentos:</h3>
          <p>Comprender etiquetas, Conocer estructura HTML<p/>
        </div>
        <div class='${styles.flex_description_challenge}'>  
          <h3>Descripcion:</h3>
          <p>En este reto, se te presentará una estructura básica de un documento HTML con algunas etiquetas faltantes. Tu misión es seleccionar las etiquetas correctas de las opciones proporcionadas para completar el código. ¡Pon a prueba tus conocimientos de HTML y demuestra que puedes construir una página web básica!</p>
        </div>
        <div class='${styles.flex_button}'>  
          <button class='${styles.button_play}'>Empezar reto</button>
          <button id="my-btn"><img src='${bulb}' class='${styles.image_bulb}'>Tips para este reto!</button>
        </div>
      </div>
    </div> 
   
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

    const bganimation = document.getElementById('bganimation')
    const numberofColorBoxes = 400;
    
    for (let i = 0; i < numberofColorBoxes; i++){
      const colorBox = document.createElement('DIV');
      colorBox.classList.add('colorBox');
      bganimation.append(colorBox)
    }
  }

  return {
    pageContent,
    logic
  }
}