import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
   return (
      <article className="teacher-item">
         <header>
            <img src="https://api.adorable.io/avatars/175" alt="Withney Guilherme" />
            <div>
               <strong>Withney Guilherme</strong>
               <span>Química</span>
            </div>
         </header>

         <p>Entusiasta das melhores tecnologias de química avançada

      <br /><br />
      APaixonado por explodir coisas no laboratório para impactar a vida de milhares de pessoas por todo continente europeu.
      </p>

         <footer>
            <p>
               Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
               <img src={whatsappIcon} alt="Logotipo do Whatsapp" />
         Entrar em contato
      </button>
         </footer>



      </article>
   )
}
export default TeacherItem;