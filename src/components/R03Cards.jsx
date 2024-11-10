import React from 'react'
import MiniCard from './subcomponents/MiniCard'
import '../assets/css/myStyles.css'

export default function R03Cards() {
  return (
    <div class="container myMargins">
      <div class="row">
        <div class="col">
          <MiniCard title="Cambiarme a claro"
                     text="Accede a un mundo de beneficios"
                    
          />
                    

        </div>
        <div class="col">
        <MiniCard title="Renovar mi equipo"
                  text="Cambia o renueva tu equipo"
        />

        </div>

        <div class="col">
        <MiniCard title="Activar mi chip"
                  text="¡Sin ir a Claro!"
        />
        </div>

        <div class="col">
        <MiniCard title="Ser Full Claro"
                  text="Recibe full beneficios sin pagar mas"
        />
        </div>

        <div class="col">
        <MiniCard title="Recargar"
                  text="Mantente conectado"
        />
        </div>
      </div>
    </div>
  )
}
