
import { Mogura } from "../Char/Mogura";
import { GameStateManager } from "../GameStateManager";
import { IGameState } from "../IGameState";
import { Utl } from "../Utl";
import { AbsGameState } from "./AbsgameState";

export class EndingState extends AbsGameState {

    private oshimaiSp: g.Sprite;

    constructor(gameStateManager: GameStateManager) {
        super(gameStateManager);
    }

    enter(scene: g.Scene): void {
        console.log("エンディング画面に入りました");
        // エンディングに必要なリソースの準備

        
        this.oshimaiSp = Utl.getSprite("gameend");
        this.scene.append(this.oshimaiSp);
        
    }

    update(): void {
        // エンディング画面での更新処理
        
    }

    exit(): void {
        console.log("エンディング画面を終了しました");
        // エンディング画面のリソース解放など
        // this.scene.onPointDownCapture.removeAll();

    }
}
