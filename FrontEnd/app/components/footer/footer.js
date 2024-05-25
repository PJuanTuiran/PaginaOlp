import styles from './footer.css'
export function FooterScene() {
    return `
    <hr>
    <div class='${styles.footer_container}'>
        <p>Copyright © 2024 codeStar</p>
        <ul class='${styles.footer_list}'>
            <li><a href='#'>Contacto Riwi</a></li>
            <li><a href='#'>Comunidad</a></li>
            <li><a href='#'>Politicas y privacidad</a></li>
            <li><a href='#'>Terminos de uso</a></li>
        </ul>
    </div>
    `
}