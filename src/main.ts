import { MScene5 } from "./MScene5";
import { GameMainParameterObject } from "./parameterObject";

export function main(param: GameMainParameterObject): void {
	console.log("main **************************************************");
	const miscene = new MScene5();
	const scene = miscene.getScene();
	// const scene = new g.Scene({
	//     game: g.game,
	//     // このシーンで利用するアセットのIDを列挙し、シーンに通知します
	//     assetIds: ["player", "shot", "se"]
	// });
	let time = 60; // 制限時間
	if (param.sessionParameter.totalTimeLimit) {
		time = param.sessionParameter.totalTimeLimit; // セッションパラメータで制限時間が指定されたらその値を使用します
	}
	// 市場コンテンツのランキングモードでは、g.game.vars.gameState.score の値をスコアとして扱います
	g.game.vars.gameState = { score: 0 };
	g.game.pushScene(scene);
}
