import { Ana } from "../Char/Ana";
import { IUpdate } from "../IUpdate";
import { SortGe } from "../SortGe";
import { Utl } from "../Utl";
import { IPoint } from "./IPoint";


export class AnaManager implements IUpdate{

    private bg: g.E;
    private anaEntArry: Ana[] = [];
    private anaGeArry: g.E[] = [];

    	// 穴の座標
	// protected anaPointArry: Array<{ x: number, y: number }> = [
    protected anaPointArry: IPoint[] = [

        { x: 50, y: 25 }, { x: 300, y: 20 }, { x: 420, y: 40 },
		{ x: 80, y: 130 }, { x: 210, y: 155 }, { x: 500, y: 150 },
		{ x: 110, y: 230 }, { x: 310, y: 220 }, { x: 450, y: 240 }];


    constructor(bg: g.E){
        this.bg = bg;

        this.createAna();
    }

    getAnaArry(): g.E[]{
        return this.anaGeArry;
    }

    getAnaPointArry(): IPoint[]{
    
        return this.anaPointArry;
    }

    update(): void {
        //
    }

    private createAna(): void{
        for(let i = 0; i < this.anaPointArry.length; i++){
            let anaEnt = new Ana();
            this.anaEntArry.push(anaEnt);
            let anaGe = anaEnt.getBaseGe();
            anaGe.x = this.anaPointArry[i].x;
            anaGe.y = this.anaPointArry[i].y;
            this.anaGeArry.push(anaGe);
            
        }
    }


}