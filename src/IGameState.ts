
export interface IGameState {
    enter(scene: g.Scene): void;
    update(): void;
    exit(): void;
}
