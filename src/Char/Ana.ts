import { Utl } from "../Utl";
import { AbsBaseChar } from "./AbsBaseChar";

export class Ana extends AbsBaseChar{
	private ana: g.Sprite;

	constructor(){
		super();


	}
	override init(): void {
		// 各アセットオブジェクトを取得します
		// const anaImageAsset = this.scene.asset.getImageById("ana");
		// const shotImageAsset = this.scene.asset.getImageById("shot");
		// const seAudioAsset = this.scene.asset.getAudioById("se");

		this.ana = Utl.getSprite("ana");

		this.baseGE.append(this.ana);



		console.log(this.scene + "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


	}
	override update(): void {
		this.baseGE.modified();

	}

}
