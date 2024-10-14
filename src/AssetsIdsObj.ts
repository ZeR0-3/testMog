const assetsIdsObj = {
    PLAYER: "player",
    SHOT: "shot",
    SE: "se",
    はじめタイトル: "hajime",
    ゲームおしまい: "gameend",
    もぐら黒: "moguraall",
    モグラタイトル:"titile",
    説明: "moguraSetumei",
    草原: "bg",
    _なんか: "bg1",
    フォント: "font",
    フォント設定: "font_glyphs",
    穴: "ana"
} as const;

export type assetsIdsObj = (typeof assetsIdsObj)[keyof typeof assetsIdsObj];
