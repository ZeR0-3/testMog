import { ISceneTime } from "../ISceneTime";
import { Utl } from "../Utl";
import { AbsBaseChar } from "./AbsBaseChar";

export class Time extends AbsBaseChar {
	private viewtime: number;
	private timeLabel: g.Label;
	private itime: ISceneTime;
	constructor(limittime: number, itime: ISceneTime) {
		super();
		this.viewtime = limittime;
		this.itime = itime;

	}

	override init(): void {
		const scene = g.game.scene();
		
		// // フォントの生成
		// const font = new g.DynamicFont({
		// 	game: g.game,
		// 	fontFamily: "sans-serif",
		// 	size: 48
		// });

		// // 残り時間表示用ラベル
		// const timeLabel = new g.Label({
		// 	scene: scene,
		// 	text: "TIME: 0",
		// 	font: font,
		// 	fontSize: font.size / 2,
		// 	textColor: "black",
		// 	x: 0.65 * g.game.width
		// });
		const timeLabel = Utl.getBitmapFont("test********************");
		this.timeLabel = timeLabel;
		// scene.append(timeLabel);

		this.baseGE.append(timeLabel);
		// this.scene.append(this.baseGE);

	};

	override update(): void {
		// カウントダウン処理
		// this.viewtime -= 1 / g.game.fps;
		this.viewtime = this.itime.getNowTime();

		let stime = Math.ceil(this.viewtime);

		switch (stime) {
			case 10:
				this.timeLabel.textColor = "blue";
		}
		this.timeLabel.text = "TIME: " + Math.ceil(this.viewtime);
		this.timeLabel.invalidate();
		this.baseGE.modified();

	}
}
