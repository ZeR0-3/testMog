export class Move1{
    private ge: g.E;
    constructor(ge: g.E){
        this.ge = ge;
    }

    public update(): void{
        // 毎フレームでY座標を再計算し、プレイヤーの飛んでいる動きを表現します
        // ここではMath.sinを利用して、時間経過によって増加するg.game.ageと組み合わせて
        this.ge.y = (g.game.height - this.ge.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 90;

    };


}
