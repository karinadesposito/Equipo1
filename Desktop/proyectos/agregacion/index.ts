import { CellPhone} from "./cellPhone";
import { Battery } from "./battery";
import { SimCard } from "./simCard";
const bat01 = new Battery (3000, "Villa","esta");
const sim01 = new SimCard ("Casio", 123456);
const Cell01 = new CellPhone("Samsung", "Galaxy 03", bat01);
const Cell02 = new CellPhone("Apple", "IPhone 45862", bat01);
console.log(Cell01.getInfo(Cell01));
Cell01.setSimcard(sim01);
console.log(Cell01.getInfo(Cell01));
