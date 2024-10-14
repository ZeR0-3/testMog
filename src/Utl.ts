import { Font, FontFamily, Game, Label, FrameSprite } from "@akashic/akashic-engine";
import { AA } from "./State/GameState";



export class Utl {
    static game: Game = g.game;
    game: g.Game = g.game;
    scene: g.Scene;
    font: Font;
    fontFamily: FontFamily;



    static getFont2(fontFamily?: string | FontFamily | (string | FontFamily)[], size?: number): Font {

        if (!fontFamily) {
            fontFamily = "sans-serif";
        }
        if (!size) {
            size = 48;
        }
        const font = new g.DynamicFont({
            game: this.game,
            fontFamily: fontFamily,
            size: size
        });

        return font;
    }

    static getLabel(text?: string, font?: Font): Label {
        text = (!text) ? "" : text;
        if (!font) {
            font = this.getFont2();
        }
        const label = new g.Label({
            scene: g.game.scene(),
            text: text,
            font: font,
            fontSize: font.size / 2,
            textColor: "black"
        });
        return label;
    }

    static getSprite(spString: AA, width?: number, height?: number): g.Sprite {
        const scene = g.game.scene();
        const sp = new g.Sprite({
            scene: scene,
            src: scene.assets[spString] as g.ImageAsset,
            width: width,
            height: height
        });
        return sp;


    }
    static getFSprite(spString: string, fNumber?: number, width?: number, height?: number): g.FrameSprite {
        const scene = g.game.scene();
        
        let farr: number[]  = [];
        for (let i = 0; i < fNumber; i++){
            farr.push(i);
        }
        
        const sp = new g.FrameSprite({
            scene: scene,
			// src: scene.assets["moguraall"] as g.ImageAsset,
            src: scene.assets[spString] as g.ImageAsset,
            
			width: 112,
			height: 96,
			srcWidth: 112,
			srcHeight: 96,
			frames: farr,
			frameNumber: 0 
       });
        return sp;

    }

    static getBitmapFont(text?: string){
        const scene = g.game.scene();
        // 上で生成した font.png と font_glyphs.json に対応するアセットを取得
		const fontAsset = scene.asset.getImage("/image/font.png");
		const glyphInfo = scene.asset.getJSONContent("/text/font_glyphs.json");

        // ビットマップフォントを生成
		const font = new g.BitmapFont({
			src: fontAsset,
			glyphInfo: glyphInfo
		});

		const label = new g.Label({
			scene: scene,
			text: "「こんにちは、アカシックエンジンです」",
			fontSize: 35,
			font: font
		});

        return label;
    }

    
    

}

