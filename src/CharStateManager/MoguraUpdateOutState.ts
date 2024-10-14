import { Mogura } from "../Char/Mogura";
import { _MoguraUpdateState } from "./_MoguraUpdateState";
import { AbsMoguraUpdateState } from "./AbsMoguraUpdateState";

console.log("AbsMoguraUpdateState:", AbsMoguraUpdateState);  // ここでチェック

import { IMoguraState } from "./IMoguraState";
import { MoguraStateManager } from "./MoguraStateManager";
import tl = require("@akashic-extension/akashic-timeline");

export class MoguraUpdateOutState extends AbsMoguraUpdateState  implements IMoguraState{
    private ishit: boolean = false;

    private isMoveing: boolean = false;
    private mogOrghight: number;

    constructor(moguraStateManager: MoguraStateManager){
        super(moguraStateManager);
        this.mogOrghight = this.mogura.getMog().height;
    }
    enter(mogura: Mogura): void {
        const mog = this.mogura.getMog();
        mog.touchable = true;

        mog.onPointDown.add(ev =>{
            this.mogura.getBaseGe().hide();
        });


        
        const sc = this.scene;
        const timeline = new tl.Timeline(sc);
        const anaH = 30;
        const heigtht = mog.height;
        mog.hide();
        const outTime = Math.floor(3000 / 3) * 2;
        const inTime = 3000 - outTime;
        const limtHight = (Math.floor(g.game.random.generate() * 100) > 15) ? 0 : Math.floor(heigtht / 2 - 10);
        mog.y = (heigtht - anaH);
        timeline.create(mog)
            .moveTo(0, limtHight, outTime, tl.Easing.easeInOutExpo)
            .moveTo(0, heigtht, inTime, tl.Easing.easeInExpo)
            .call(()=>{
                timeline.cancelAll;
                mog.hide();
                const nextState = new _MoguraUpdateState.In(this.moguraStateManager);
        
                this.moguraStateManager.changeState(nextState, this.mogura);
            });

        // this._isColChkOk = true;
        mog.frameNumber = 0;
        // mog.show();
        mog.modified();

        
        

        // const mog = mogura.getMog();
        // mog.srcY = 30;
        // mog.height = 20;
        // mog.srcHeight = 50;

        // mog.modified();
        // mog.invalidate();
        


        
    }
    update(): void {
        // const mog = this.mogura.getMog();
        // mog.srcHeight = mog.y - 96;
        // mog.height = mog.y -96; 
        // const rnd = g.game.random.generate() * 100   ;
        // if(rnd < 1){
            
        //     this.mogura.getBaseGe().hide();
        //     const nextState = new MoguraUpdagteInState(this.moguraStateManager);
        //     this.moguraStateManager.changeState(nextState, this.mogura);
        // }
        // mog.modified();

        const mog = this.mogura.getMog();
        
        // mog.srcY = 30;
        // let m = this.mogOrghight - mog.height;
        let m = this.mogOrghight - mog.y;
        if (mog.y > 66){
            mog.srcHeight = 0;
            mog.height = 0;
            
        } else {
            mog.srcHeight = m - 30;
            mog.height = m - 30;

        };
        mog.show();
        // console.log("******** y " + mog.y);
        // console.log("****** m " + m);
        // console.log("******** srcH " + mog.srcHeight);
        // console.log("******** H " + mog.height);
        mog.modified();
        mog.invalidate();
     


    }
    exit(): void {
        // throw new Error("Method not implemented.");
        const mog = this.mogura.getMog();
        mog.height = this.mogOrghight;
        mog.srcHeight = this.mogOrghight;
        mog.y = 0;
    }
    
}