


export abstract class AbsMScene{
	protected scene: g.Scene;
	protected assetIds: string[];



	constructor(){
		this.assetIds = this.getAssetidsStringArry();
		this.scene = this.createScene();
	}
	public getScene(): g.Scene {
		return this.scene;
	}

	protected abstract getAssetidsStringArry(): string[];
	protected abstract createScene(): g.Scene;
}
