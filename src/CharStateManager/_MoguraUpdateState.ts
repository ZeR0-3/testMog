// _MoguraUpdateState.ts
import { MoguraUpdateInState } from "./MoguraUpdateInState";
import { MoguraUpdateOutState } from "./MoguraUpdateOutState";
import { MoguraUpdateWaitState } from "./MoguraUpdateWaitState";

export const _MoguraUpdateState = {
    Wait: MoguraUpdateWaitState,
    In: MoguraUpdateInState,
    Out: MoguraUpdateOutState,
} as const;

export type _MoguraUpdateState = (typeof _MoguraUpdateState)[keyof typeof _MoguraUpdateState];
