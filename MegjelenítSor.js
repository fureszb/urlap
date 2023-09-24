class Megleneitsor {

    constructor(objektum, szuloELem) {
        this.objektum = objektum;
        this.tablaElem = szuloELem;
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.#sor();
    }
    #sor() {
        let txt = "<tr>";
        for (const key in this.objektum) {
            console.log(`${key} - ${this.objektum[key]}`);
            txt += `<td>${this.objektum[key]}</td>`;
        }
        txt+=`<td><button>Kész</button>`;
        txt+=`<button>Töröl</button></td>`;
        txt += "</tr>";
        this.tablaElem.append(txt);
    }
}
export default Megleneitsor;