import { AbsBaseChar } from "./AbsBaseChar";
import { Move1 } from "./CharMovePattan/Move1";

export class P1 extends AbsBaseChar{
	private player: g.Sprite;

	private move1: Move1;
	constructor(){
		super();


	}
	override init(): void {
		this.move1 = new Move1(this.baseGE);
		// 各アセットオブジェクトを取得します
		const playerImageAsset = this.scene.asset.getImageById("player");
		// const shotImageAsset = this.scene.asset.getImageById("shot");
		// const seAudioAsset = this.scene.asset.getAudioById("se");

		// プレイヤーを生成します
		this.player = new g.Sprite({
			scene: this.scene,
			src: playerImageAsset,
			width: playerImageAsset.width,
			height: playerImageAsset.height
		});

		this.baseGE.append(this.player);




		// プレイヤーの初期座標を、画面の中心に設定します
		this.baseGE.x = (g.game.width - this.player.width) / 3;
		this.baseGE.y = (g.game.height - this.player.height) / 3;
		// this.scene.append(this.baseGE);

		console.log(this.scene + "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


	}
	override update(): void {
		// // 毎フレームでY座標を再計算し、プレイヤーの飛んでいる動きを表現します
		// // ここではMath.sinを利用して、時間経過によって増加するg.game.ageと組み合わせて
		this.baseGE.y = (g.game.height - this.baseGE.height) / 3 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 300;
		this.move1.update();
		// プレイヤーの座標に変更があった場合、 modified() を実行して変更をゲームに通知します
		this.baseGE.modified();

	}

}
