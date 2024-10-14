import { Mogura } from "../Char/Mogura";
import { MoguraStateManager } from "../CharStateManager/MoguraStateManager";
import { IUpdate } from "../IUpdate";
import { IPoint } from "./IPoint";

export class MoguraManager implements IUpdate{

    private mogEntArry: Mogura[] = [];
    private anaPointArry: IPoint[] = [];

    private mogStateManagr: MoguraStateManager;

    constructor(anaPointArry?: IPoint[]){
        if(anaPointArry){
            this.anaPointArry = anaPointArry;
        }

        // this.mogStateManagr = new MoguraStateManager();
        this.createMoguraEnt();


    }
    update(): void {
        // console.log("**********  Moguramanager update() ***************");
        this.mogEntArry.forEach((mog)=>{
            mog.update();
        });
    }

    getMogEntArry(): Mogura[]{
        return this.mogEntArry;
    }

    private createMoguraEnt(): void{
        console.log("MogManager creatMogura");
        const length = this.anaPointArry.length;

        for(let i = 0; i < this.anaPointArry.length; i++){

            const m = new Mogura();
            console.log("MogManager creatMogura 各モグラのループ"+m);
            m.setBaseGeXY(this.anaPointArry[i]);
            this.mogEntArry.push(m);
        }
    }
}