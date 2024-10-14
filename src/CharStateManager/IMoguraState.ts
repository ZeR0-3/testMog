import { Mogura } from "../Char/Mogura";

export interface IMoguraState {
    enter(mogura: Mogura): void;
    update(): void;
    exit(): void;
}
