import { AbsBaseChar } from "./AbsBaseChar";
import { Utl } from "../Utl";
import { MoguraStateManager } from "../CharStateManager/MoguraStateManager";
import { MoguraUpdateWaitState } from "../CharStateManager/MoguraUpdateWaitState";




/** モグラ出現パラメータ */
export interface IMogSyutugenPrm {
	wait: number;
	OuttingTime: number;
	HoleOutKakuritu: number;
	id: number;
}


export class Mogura extends AbsBaseChar{

    private mogStateManagr: MoguraStateManager;

	/** モグラ管理クラスインターファイス */
	// protected imogkanri: IforMogKanri;
	// protected sp: g.E;
	// protected _label: g.Label | al.Label;
	/** モグラのスプライト */
	protected mogSp: g.FrameSprite;
	protected mogSpArr: g.FrameSprite[] = [];

	protected anaSp: g.Sprite;
	protected paneSp: g.Pane;
	/** 今の状態(state)関数 */

	protected _stateStraegy: () => void;
	/** stateの文字列 */
	// protected _nowStateStr: mogStateStr = _mogState.waiting;
	// protected _nextStateStr: mogStateStr = null;
	// 穴が9個あってどこに待機
	protected _holeNum: number = 0;
    /**  穴	の中にいるか
	 * ture 穴In
	 * false 外Out
	 */
	// protected isNowHoleIn: boolean = FlgHoleinout.In;

	/** タッチイベント来ていればあればtrue */
	protected isTachiE: boolean = false;

	/** 今穴から出ている途中かのフラグ */
	protected isHoleOutting: boolean = false;

	/** timeoutMachi */
	protected isTimeoutMachi: boolean = false;

	/** 穴から出ていいか許可フラグ */
	protected isHoleoutOk: boolean = false;
	/** ホールアウト中の時間 */
	// tslint:disable-next-line:typedef
	protected holeouttime = 100;

	/** holeIn,holeOut関数を入れる変数 */
	// protected nowHoleinOutFun: any;
	protected wtime: number = 30;
	/**
	 * 現在の状態を表す関数オブジェクト
	 * 待機		steteWaiting
	 * 生きてる	stateLiveing
	 * 死んでる	stateDead
	 */
	// tslint:disable-next-line:member-ordering
	// protected state = {
	// 	steteWaiting: () => this.stateWaiting(),
	// 	stateLiveing: () => this.stateLiveing(),
	// 	stateDead: () => this.stateDead()
	// };

	/** タイムライン */
	// protected timeline: tl.Timeline;
	// protected anaTimeline: tl.Timeline;
	// protected groundTimeline: tl.Timeline;
	// protected lblInfoText: al.Label;

	/** メインループ関数 */
	protected updateK: () => void;
	// protected inoutFnc: any;
	// public tt1: string = "con";

	/** ポイントダウンイベント */
	protected _myev: g.PointDownEvent = null;
	/** 得点用の関数 */
	protected _setSc: any = null;
	/** 自分には当たってないよを関数 */
	protected _setSCnoHit: any = null;
	/** コリジョンチェックするかしないか */
	protected _isColChkOk: boolean = false;
	/** 生き残れたかの拡張フラグ */
	// protected _isSurvivor: IisArrowBoolean = {isArrow: false};
	/** デフォルトの出現パラメータ */
	protected _prm: IMogSyutugenPrm = {
		HoleOutKakuritu: 90, // 穴待機から外に出る確率
		OuttingTime: 3000, // 外に出ている時間
		wait: 400,
		id: 0 // モグラのタイプ
	};
	/** 当たり判定で
	 * 当たった時	true
	 * 外した時		false
	 * 得点を送った時に初期化する(false)
	 */
	protected _isHit: boolean = false;

	// protected _hitSendPrm: IhitSendPrm = null;
	// protected _isSurvivFnc: IisSurvivHandl = null;



    private mog: g.FrameSprite;
    private colliBox: g.FilledRect;

    constructor(){
        super();
        // this.mogStateManagr = new MoguraStateManager();
        console.log("************ Mogura constracter ********************");
        console.log(this.mogStateManagr);

    }
    override init(): void {
        this.mogStateManagr = new MoguraStateManager(this);
        console.log("******* Mogura init() **************");
        console.log(this.mogStateManagr);
        this.mog = Utl.getFSprite("moguraall",2);
        this.mog.touchable = true;
        this.baseGE.append(this.mog);

        	// 初期状態をタイトル画面に設定
            console.log("***************    mogura init() **************************");
            console.log(this.mogStateManagr);
			const waitState = new MoguraUpdateWaitState(this.mogStateManagr);
            console.log("***************    mogura init() waitState **************************");
            this.mogStateManagr.changeState(waitState, this); // 初期状態をセット

    }
    override update(): void {
        // console.log("**********  Mogura update() ***************");
        this.mogStateManagr.update();
    }

    getMog(): g.FrameSprite{
        return this.mog;
    }

}