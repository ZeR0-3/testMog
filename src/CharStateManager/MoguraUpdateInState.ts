import { Mogura } from "../Char/Mogura";
import { AbsMoguraUpdateState } from "./AbsMoguraUpdateState";
import { IMoguraState } from "./IMoguraState";
import { MoguraStateManager } from "./MoguraStateManager";
import { MoguraUpdateOutState } from "./MoguraUpdateOutState";


export class MoguraUpdateInState extends AbsMoguraUpdateState implements IMoguraState{

    constructor(moguraStateManager: MoguraStateManager){
        super(moguraStateManager);
    }
    enter(mogura: Mogura): void {
        // throw new Error("Method not implemented.");
    }
    update(): void {
        const rnd = g.game.random.generate() * 10   ;
        if(rnd < 1){
            
            this.mogura.getBaseGe().show();
            const nextState = new MoguraUpdateOutState(this.moguraStateManager);
            this.moguraStateManager.changeState(nextState, this.mogura);
        }
    }
    exit(): void {
        // throw new Error("Method not implemented.");
    }
    
}