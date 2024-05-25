import { navigateTo } from "../../../../Router";
import { logOut } from "../../../../helpers";
import { NavigationBar } from "../../../navigation-bar/navigation-bar";
import { SidebarMenu } from "../../../sidebar-menu/sidebar-menu";
import styles from './dashboard-layout.css';
import menuImages  from '../../../sidebar-menu/menuImages';
const { home, hacker, juegos, tip, codificacion, rutas, gamificacion, tienda } = menuImages
import stylesnav from '../../../navigation-bar/navigation-bar.css';
import stylesside from '../../../sidebar-menu/sidebar-menu.css';
import { FooterScene } from "../../../footer/footer";

export function DashboardLayout(pageContent, logic, footer, navbarData, sidebarData) {

  // hace la peticion al backend.

  const root = document.getElementById('root');

  sidebarData = [
    { href: '/dashboard', name: 'Home', imagen:home},
    // { href: '/dashboard/reports', name: 'Perfil',imagen: hacker},
    { href: '/dashboard/settings', name: 'Lenguajes',imagen: rutas },
    { href: '/dashboard/users', name: 'Retos',imagen: juegos },
    { href: '/dashboard/products', name: 'Estadisticas',imagen:gamificacion },
    { href: '/dashboard/forum', name: 'Tienda',imagen: tienda },
    { href: '/dashboard/show-cases', name: 'Tips',imagen: tip },
  ];

  navbarData = {
    user: 'Nicolas Picon',
    userImage: 'https://randomuser.me/api/portraits/men/75.jpg',
   };

  root.innerHTML = `
  <div class="${styles.container}">
    <div id='sidebar' class="${styles.sidebar}">
      ${SidebarMenu(sidebarData)}
    </div>
    <div id=${styles.menu} class="${styles.navbar}">
      ${NavigationBar(navbarData)}
    </div>
    <div class=${styles.footer}>
      ${FooterScene(footer)}
    </div>  
    <div class="${styles.main}">
      ${pageContent}
    </div>
  </div>
  `;

  logic();

  const lenguage = document.getElementById('/dashboard/settings');
  const list_show = document.getElementById('list_show');
  lenguage.addEventListener("mouseover", () => {
   list_show.style.display = "block";
  })
  lenguage.addEventListener("mouseout", function () {
    list_show.style.display = "none";
  })
  const menu_hamburger = document.getElementById("menu-hamburger");
  const aside_width = document.getElementById("sidebar");
  menu_hamburger.addEventListener("click",()=>{
    aside_width.classList.toggle(styles["active"])

  })
  
  const search = document.getElementById('search')
  const containerSearch = document.getElementById('containerSearch')
  search.addEventListener('click', () => {
    containerSearch.classList.toggle(stylesnav.open_search)
  })

  let subMenu = document.getElementById("subMenu");
  let imageProfile = document.getElementById("imageProfile");
  imageProfile.addEventListener("click", () => {
    console.log('aqui soy')
    subMenu.classList.toggle(stylesnav.open)
    console.log(stylesnav.open)
  })

  sidebarData.forEach(({ href, icon, label }) => {
    document.getElementById(href).addEventListener('click', () => {
      navigateTo(href);
    });
  });

  document.getElementById('logout').addEventListener('click', logOut)
}

// navbarData.include(({ menuHamburguesa }) => {
//   document.getElementsById(menuHamburguesa).addEventListener('click', open_close_menu);
// }) 
// document.getElementById(navbarData.menu).addEventListener('click', open_close_menu);
// var menu_side = document.getElementById('menu_side');
// var btn_open = document.getElementById('btn_open');
// var body = document.getElementById('body');
//   function open_close_menu () {
//     body.classList.toggle('body_move')
//     menu_side.classList.toggle('menu_side_move')
// }
