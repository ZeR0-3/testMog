// export const _assetIds: string[] = ["player", "shot", "se", "ana", "moguraall", "moguraallr", "moguraallb","titile", "moguraSetumei", "hajime", "gameend", "font", "font_glyphs","bg", "bg1"];
// export const _assetIds: string[] = ["player", "shot", "se", "ana", "moguraall", "moguraallr", "moguraallb","titile", "moguraSetumei", "hajime", "gameend", ,"bg", "bg1"];

export const _assetIds2 = ["player", "shot", "se", "hajime", 
    "gameend", "moguraall","titile","moguraSetumei","bg", "bg1","font",
    "font_glyphs","ana"] as const;
export type AssetIds = typeof _assetIds2[number];

export const _assetIds: string[] = [..._assetIds2];

export const limittime: number = 20;

// ゲーム時間
// ミリ秒

//* Titleの時間　*//
export const titleLimitteTime: number = 5000;