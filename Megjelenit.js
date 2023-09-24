import MegjelenítSor from "./MegjelenítSor.js";
class Megjelenit {
    #lista
    constructor(lista, szuloELem) {
        this.#lista = lista;
        this.szuloELem = szuloELem.append(`<table class="table table-bordered">
        <tbody class="tablazat">
        <thead>
      <tr>
        <th>Tevékenység</th>
        <th>Határidő</th>
        <th>Kész-e</th>
        <th>Gombok</th>
      </tr>
    </thead>
        </tbody>
        </table>`);
        this.elem = $('.tablazat');
        this.tablazatbair();
    }
    tablazatbair(){
        this.#lista.forEach(element => {
            new MegjelenítSor(element, this.elem)
        });
    }
}
export default Megjelenit;