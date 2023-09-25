class Megleneitsor {

    constructor(objektum, szuloELem) {
        this.objektum = objektum;
        this.tablaElem = szuloELem;
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.#sor();
        this.bezarElem = this.sorElem.children("td").children(".torol");
        this.bezarElem.on("click", ()=>{
            this.TorolTrigger();
        })
    }
    #sor() {
        let txt = "<tr>";
        for (const key in this.objektum) {
            console.log(`${key} - ${this.objektum[key]}`);
            txt += `<td>${this.objektum[key]}</td>`;
        }
        txt+=`<td><button class="kesz">Kész</button>`;
        txt+=`<button class="torol">Töröl</button></td>`;
        txt += "</tr>";
        this.tablaElem.append(txt);
    }
    TorolTrigger(){
        const torolTr = new CustomEvent("torol", {detail : this});
        window.dispatchEvent(torolTr);
    }
}
export default Megleneitsor;