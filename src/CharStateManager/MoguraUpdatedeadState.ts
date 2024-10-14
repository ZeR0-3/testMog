import { FilledRect } from "@akashic/akashic-engine";
import { Mogura } from "../Char/Mogura";
import { Utl } from "../Utl";
import { AbsMoguraUpdateState } from "./AbsMoguraUpdateState";
import { IMoguraState } from "./IMoguraState";
import { MoguraStateManager } from "./MoguraStateManager";

export class MoguraUpdateDeadState extends AbsMoguraUpdateState implements IMoguraState{

    constructor(moguraStateManager: MoguraStateManager){
        super(moguraStateManager);
    }
    enter(mogura: Mogura): void {
        // throw new Error("Method not implemented.");
     }
    update(): void {
    
    }
    exit(): void {
        // throw new Error("Method not implemented.");
    }
    
}