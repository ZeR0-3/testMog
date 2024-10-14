import { IGameState } from "./IGameState";

export class GameStateManager {
  // public instance: GameStateManager;
  private currentState: IGameState;
  private scene: g.Scene;

  constructor() {

  }

  public changeState(newState: IGameState, scene: g.Scene): void {

    if (this.currentState) {
      this.currentState.exit(); // 現在の状態を終了
    }
    this.currentState = newState; // 新しい状態に変更
    this.currentState.enter(scene); // 新しい状態を開始

  }

  public changeState2(StateClass: new (manager: GameStateManager) => IGameState, scene: g.Scene): void {

    if (this.currentState) {
      this.currentState.exit(); // 現在の状態を終了
    }
    this.currentState = new StateClass(this); // 新しい状態に変更
    this.currentState.enter(scene); // 新しい状態を開始

  }

  public update(): void {
    if (this.currentState) {
      this.currentState.update(); // 現在の状態の更新処理を実行
    }

  }
}
