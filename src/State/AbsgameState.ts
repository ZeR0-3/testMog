import { _assetIds2 } from "../Config";
import { GameStateManager } from "../GameStateManager";
import { IGameState } from "../IGameState";
import { _GameState } from "./GameState";

export interface IDestory{
	destroy(): void;
}



export abstract class AbsGameState implements IGameState{

    protected gameStateManager: GameStateManager;
    protected scene: g.Scene;

    /** exitの時destroyする奴入れる配列 */
    protected idestoryArry: IDestory[] = [];

    constructor(gameStateManager: GameStateManager){
        console.log("******* AbsGameState constracter ");
        console.log(gameStateManager);
        this.gameStateManager = gameStateManager;
        this.scene = g.game.scene();
        
    }

    abstract enter(scene: g.Scene): void;
    abstract update(): void;
    abstract exit(): void;

    /** 基本画面（BG）を合わせるため */
    fitGameScreen(bg: g.E): {sx: number, sy: number}{
        
        const sx = g.game.width / bg.width;
		const sy = g.game.height / bg.height;
		
        return {sx, sy};
    }
    
    /** 配列に入れた奴いっきにdestroyする */
    protected exitDestory(): void {
        this.idestoryArry.forEach((dest)=>{
            dest.destroy();
        })
    };


    /** ステートチェンジ用 */
    protected changeState(nextState: _GameState): void{
        this.gameStateManager.changeState(new nextState(this.gameStateManager), this.scene);

    }

    protected changeState2(ClassState: new (manager: GameStateManager) => IGameState): void{
        this.gameStateManager.changeState(new ClassState(this.gameStateManager),this.scene);

    }
}