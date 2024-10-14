import { IUpdate } from "./IUpdate";



export class SortGe implements IUpdate{

    private ge: g.E;
    private geArry: g.E[] = [];

    constructor(){
        //
        this.ge = new g.E({ scene: g.game.scene() });


    }
    update(): void {
        this.sortGes();    
    }

    getGe(): g.E{
        return this.ge;
    }

    pushGe(ge: g.E){
        this.geArry.push(ge);
    }

    private sortGes(){
        //
        for(let i = 0; i < this.geArry.length; i++){
            this.ge.remove(this.geArry[i]);
        }

        
        this.geArry.sort((a, b) => a.y - b.y);
        for(let i = 0; i < this.geArry.length; i++){
            this.ge.append(this.geArry[i]);
        }
    }


}