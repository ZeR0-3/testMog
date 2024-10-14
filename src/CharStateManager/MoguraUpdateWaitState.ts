import { Mogura } from "../Char/Mogura";
import { _MoguraUpdateState } from "./_MoguraUpdateState";
import { AbsMoguraUpdateState } from "./AbsMoguraUpdateState";
import { IMoguraState } from "./IMoguraState";
import { MoguraStateManager } from "./MoguraStateManager";
import { MoguraUpdateOutState } from "./MoguraUpdateOutState";


export class MoguraUpdateWaitState extends AbsMoguraUpdateState implements IMoguraState{

    constructor(moguraStateManager: MoguraStateManager){
        super(moguraStateManager);
    }
    enter(mogura: Mogura): void {
        this.mogura.getBaseGe().hide();
    }

    update(): void {
        const rnd = g.game.random.generate() * 10   ;
        if(rnd < 1){
            
            this.mogura.getBaseGe().show();
            // const nextState = new MoguraUpdateOutState(this.moguraStateManager);
            const nextState = new _MoguraUpdateState.Out(this.moguraStateManager);
        
            this.moguraStateManager.changeState(nextState, this.mogura);
        }
        
        // throw new Error("Method not implemented.");
    }
    exit(): void {
        // throw new Error("Method not implemented.");
    }
    
}