import { GameStateManager } from "../GameStateManager";
import { IGameState } from "../IGameState";
import { MainGameState } from "./MainGameState";
import { Utl } from "../Utl";
import { EndingState } from "./EndingState";
import { AbsGameState } from "./AbsgameState";
import { _GameState } from "./GameState";
import { _assetIds, _assetIds2 } from "../Config";

// タイトル画面　説明画面 クラス
export class TitleState extends AbsGameState {
	
	/** バックグラウンド　芝 */
	private bg: g.Sprite;
	/** もぐらたたきのタイトル文字画像 */
	private tit: g.Sprite;
	/** 説明画面の画像 */
	private setu: g.Sprite;

	

	constructor(gameStateManager: GameStateManager) {
		super(gameStateManager);
		
		// const scene = g.Game.arguments.scene;

	}


	enter(scene: g.Scene): void {
		console.log("タイトル画面に入りました   " + this.gameStateManager);

		this.scene = scene;
		
		const bg = Utl.getSprite("bg");
		this.bg = bg;
		
		this.idestoryArry.push(this.bg);

		let sxy = this.fitGameScreen(bg);
		

		const tit = Utl.getSprite("titile");
		bg.append(tit);
		this.tit = tit;
		tit.show();

		scene.append(bg);

		const setu = Utl.getSprite("moguraSetumei");
		setu.hide();
		bg.append(setu);
		this.setu = setu;
		setu.hide();
	

/////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////////////////

		scene.setTimeout(() => {
			tit.hide();
			setu.show();
		}, 1000);

		scene.setTimeout(() => {

			this.changeState(_GameState.Main);
			// this.changeState2(_GameState.Main);

		}, 2000);


	}

	update(): void {
		// タイトル画面での更新処理
		console.log("タイトル画面upadate()に入りました   " + this.gameStateManager);
	}

	exit(): void {
		console.log("タイトル画面を終了しました");
		// タイトル画面のリソース解放など

		this.exitDestory();

	}
}
