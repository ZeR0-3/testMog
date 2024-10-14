import { _assetIds2 } from "../Config";
import { EndingState } from "./EndingState";
import { MainGameState } from "./MainGameState";
import { TitleState } from "./TitleState";

export const _GameState = {
	Main: MainGameState,
	End: EndingState,
	Titile: TitleState,
	
  } as const;
   
export type _GameState = (typeof _GameState)[keyof typeof _GameState];

export type AA = typeof _assetIds2[number];