import { IPoint } from "../CharManager/IPoint";

export abstract class AbsBaseChar{
    protected baseGE: g.E;
    protected scene: g.Scene;

    constructor(){
        this.scene = g.game.scene();
        this.baseGE = new g.E({scene: this.scene });
        this.init();
    }

    abstract init(): void;
    abstract update(): void;

    getBaseGe(): g.E{
        return this.baseGE;
    }

    setBaseGeXY(xyPoint: IPoint): void{
        this.baseGE.x = xyPoint.x;
        this.baseGE.y = xyPoint.y;
    }
    getBaseGeXY(): IPoint{
        return {x: this.baseGE.x, y: this.baseGE.y};
    }

    destroy(){
        this.baseGE.destroy();
    }

    
}
