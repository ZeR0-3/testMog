import { AbsMScene } from "./AbsMScene";
import { GameStateManager } from "./GameStateManager";
import { ISceneTime } from "./ISceneTime";
import { UpdateManager } from "./UpdateManager";
import { _assetIds } from "./Config";
import { _GameState } from "./State/GameState";


export class MScene5 extends AbsMScene implements ISceneTime {
	protected override getAssetidsStringArry(): string[] {
		return _assetIds;
	}

	getNowTime: () => number;

	private gameStateManager: GameStateManager;
	private updateManager: UpdateManager;

	constructor() {
		super();

		this.gameStateManager = new GameStateManager(); // 初期状態はまだ設定しない

	}

	getGameStateManeger(): GameStateManager {
		return this.gameStateManager;
	}

	protected createScene(): g.Scene {
		const scene = new g.Scene({
			game: g.game,
			assetIds: this.assetIds,
		});


		scene.onLoad.add(() => {

			const time = 60;


			this.updateManager = new UpdateManager(scene, 60, this);

			// 初期状態をタイトル画面に設定
			this.gameStateManager.changeState2(_GameState.End,scene);

		});


		scene.onUpdate.add(() => {
			this.gameStateManager.update(); // 現在の状態の更新処理を実行
		});



		return scene;
	}
}

export class SkewedRect extends g.E {
	override width: number;
	override height: number;
	private color: string;
	private skewFactorX: number;
	private scaleFactorY: number;

	constructor(scene: g.Scene, width: number, height: number, color: string, skewFactorX: number, scaleFactorY: number) {
		super({ scene: scene });
		this.width = width;
		this.height = height;
		this.color = color;
		this.skewFactorX = skewFactorX;  // X軸方向のスキュー（傾き）
		this.scaleFactorY = scaleFactorY;  // Y軸方向の縮小率
	}

	override renderSelf(renderer: g.Renderer, camera?: g.Camera): boolean {
		// 変形行列の保存
		renderer.save();

		// 台形の変形を行うための行列を適用（X方向のスキューとY方向の縮小を含む）
		renderer.transform([
			1, 0,                              // X軸方向のスケール（そのまま）
			this.skewFactorX, this.scaleFactorY, // X方向のスキューとY方向のスケール
			0, 0                               // 位置の変更はなし
		]);

		// 四角形の描画
		renderer.fillRect(0, 0, this.width, this.height, this.color);

		// 変形行列を元に戻す
		renderer.restore();
		return true;
	}
}




