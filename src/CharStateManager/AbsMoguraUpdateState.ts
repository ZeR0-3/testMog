import { Mogura } from "../Char/Mogura";
import { _MoguraUpdateState } from "./_MoguraUpdateState";
import { IMoguraState } from "./IMoguraState";
import { MoguraStateManager } from "./MoguraStateManager";


export interface IDestory {
    destroy(): void;
}


export abstract class AbsMoguraUpdateState implements IMoguraState {


    protected moguraStateManager: MoguraStateManager;
    protected scene: g.Scene;
    protected idestoryArry: IDestory[] = [];
    protected mogura: Mogura;


    constructor(moguraStateManager: MoguraStateManager) {


        this.moguraStateManager = moguraStateManager;
        console.log("***********************  AbsMoguraUpdateState constracter  *************************** ");
        console.log(this.moguraStateManager);
        this.scene = g.game.scene();
        this.mogura = moguraStateManager.getMogura();

    }
    abstract enter(mogura: Mogura): void;
    abstract update(): void;
    abstract exit(): void;

    fitGameScreen(bg: g.E): { sx: number, sy: number } {

        const sx = g.game.width / bg.width;
        const sy = g.game.height / bg.height;

        return { sx, sy };
    }

    protected exitDestory(): void {
        this.idestoryArry.forEach((dest) => {
            dest.destroy();
        })
    };


    protected changeState(nextState: IMoguraState): void {
        this.moguraStateManager.changeState(nextState, this.mogura);
    }

}