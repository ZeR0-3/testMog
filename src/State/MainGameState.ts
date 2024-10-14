import { Time } from "../Char/Time";
import { limittime } from "../Config";
import { EndingState } from "./EndingState";
import { GameStateManager } from "../GameStateManager";
import { IGameState } from "../IGameState";
import { TitleState } from "./TitleState";
import { UpdateManager } from "../UpdateManager"; // 先ほど作成したUpdateManagerを利用
import { AbsGameState } from "./AbsgameState";
import { Utl } from "../Utl";
import { AnaManager } from "../CharManager/AnaManager";
import { SortGe } from "../SortGe";
import { MoguraManager } from "../CharManager/MoguraManager";

export class MainGameState extends AbsGameState {
    private updateManager: UpdateManager;

    private timeLabel: Time;
    private anaMg: AnaManager;

    private sortGe: SortGe;

    constructor(gameStateManager: GameStateManager) {
        super(gameStateManager);
        // this.scene = g.game.scene();
        // this.gameStateManager = gameStateManager;
        this.updateManager = new UpdateManager(this.scene, limittime);
    }

    enter(scene: g.Scene): void {
        console.log("メインゲームが始まりました");
        // メインゲームに必要なリソースの準備
        const bg = Utl.getSprite("bg");
        scene.append(bg);
        const sxy = this.fitGameScreen(bg);
        bg.scaleX = sxy.sx;
        bg.scaleY = sxy.sy;
        
        this.sortGe = new SortGe();


        this.timeLabel = new Time(limittime, this.updateManager);
        bg.append(this.timeLabel.getBaseGe());

        this.anaMg = new AnaManager(bg);
        const _sortGe = this.sortGe.getGe();

        

        const mogMger = new MoguraManager(this.anaMg.getAnaPointArry());


        for(let i = 0; i < this.anaMg.getAnaPointArry().length; i++) {

            const mog = mogMger.getMogEntArry()[i].getBaseGe();
    
    
            
            _sortGe.append(mog);
        }
        const anaArry = this.anaMg.getAnaArry();

        anaArry.forEach((ana)=>{
            _sortGe.append(ana);
        });

        bg.append(_sortGe);
        
        
        this.updateManager.addUpdater(
            this.timeLabel,
            this.anaMg,
            mogMger,
            this.sortGe
        );
        
        this.updateManager.start(); // ゲームの更新処理を開始
    }

    update(): void {
        // console.log("main game update" + this.updateManager.getTime());

        if (this.updateManager.getTime() <= 0){
            // const endGameState = new EndingState(this.scene);
        
            // this.gameStateManager.changeState(new EndingState(this.gameStateManager), this.scene);
            this.changeState(EndingState);
        }
        this.updateManager.update(); // 更新処理を実行
    }

    exit(): void {
        console.log("メインゲームが終了しました");
        // メインゲームのリソース解放など
    }
}
