import { IUpdate } from "./IUpdate";
import { MScene5 } from "./MScene5";


export class UpdateManager {
	private updateArry: IUpdate[] = [];
	private time: number;
	private mainLoopFnc = ()=>{};

	constructor(
		private scene: g.Scene,
		initialTime: number,
		private parent?: MScene5
	) {
		this.time = initialTime;
	}

	public addUpdater(...updater: IUpdate[]): void {
		updater.forEach(up => {
			this.updateArry.push(up);
		});
		// this.updateArry.push(updater);
	}
	public update():void {
		// console.log("on updatemanager update()");
		if (this.time <= 0) {
			// this.scene.onUpdate.remove(updateHandler);
		} else {
			this.time -= 1 / g.game.fps;
			this.mainLoopFnc();
			this.updateArry.forEach((updater) => {
				updater.update();
			});
		}

	}

	public addMainLoopFnc(fnc: () =>void){
		this.mainLoopFnc = fnc;
	}

	public start(): void {

		// console.log("update():            start()");
		// const updateHandler = (): void => {
		//     if (this.time <= 0) {
		//         this.scene.onUpdate.remove(updateHandler);
		//     } else {
		//         this.time -= 1 / g.game.fps;
		//         this.updateArry.forEach((updater) => {
		//             updater.update();
		//         });
		//     }
		// };
		// this.scene.onUpdate.add(updateHandler);
	}

	public getTime(): number {
		return this.time;
	}

	public getNowTime(): number{
		return this.time;
	}
}
