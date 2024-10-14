import { Mogura } from "../Char/Mogura";
import { IMoguraState } from "./IMoguraState";


export class MoguraStateManager {
    // public instance: GameStateManager;
    private currentState: IMoguraState;
    private scene: g.Scene;
    private mogura: Mogura;

    constructor(mogura: Mogura) {
        this.mogura = mogura;
    }

    public getMogura(): Mogura {
        return this.mogura;
    }

    public changeState(newState: IMoguraState, mogura: Mogura): void {

        if (this.currentState) {
            this.currentState.exit(); // 現在の状態を終了
        }
        this.currentState = newState; // 新しい状態に変更
        this.currentState.enter(this.mogura); // 新しい状態を開始

    }
    // 新しいクラスを受け取るように変更
    public changeState2(StateClass: new (manager: MoguraStateManager) => IMoguraState): void {
        if (this.currentState) {
            this.currentState.exit();
        }
        this.currentState = new StateClass(this); // 新しい状態のインスタンスを作成
        this.currentState.enter(this.mogura);
    }

    
    public update(): void {
        if (this.currentState) {
            this.currentState.update(); // 現在の状態の更新処理を実行
        }

    }
}
