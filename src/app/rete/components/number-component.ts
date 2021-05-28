import { Component, Output } from "rete";
import { NumControl } from "../controls/number-component";
import { numSocket } from "../sockets";


export class NumComponent extends Component {
  constructor() {
    super("Number");
  }

  builder(node : any) {
    const out1 = new Output("num", "Number", numSocket);

    return node.addControl(new NumControl(this.editor, "num")).addOutput(out1);
  }

  worker(node : any, inputs : any, outputs : any) {
    outputs["num"] = node.data.num;
  }
}
