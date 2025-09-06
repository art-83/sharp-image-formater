import sharp from "sharp";
import fs from "fs";
import { ImageRotateService } from "./service/image-rotate.service";

const imageRotateService = new ImageRotateService();

async function teste() {
    for(let i = 1; i <= fs.readdirSync(__dirname + "/media").length - 1; i++) {
        const image = sharp(__dirname + "/media/" + i + ".jpeg");
        const imageFormated = await imageRotateService.formatImage(image);
        imageFormated.toFile(__dirname + "/media/result/result_" + i + ".jpeg"); 
    }
}

teste();