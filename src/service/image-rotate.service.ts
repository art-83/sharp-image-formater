import sharp from "sharp";

export class ImageRotateService {
    private readonly defaultWidth = 899;
    private readonly defaultHeight = 1599;

    private isRotated(image: sharp.Metadata): boolean {
        if(image.width > image.height) {
            return true;
        }
        return false;
    }

    private rotateAndResizeImage(image: sharp.Sharp): sharp.Sharp {
        return image.rotate(90).resize(this.defaultWidth, this.defaultHeight); 
    }

    public async formatImage(image: sharp.Sharp): Promise<sharp.Sharp> {
        const imageMetadata = await image.metadata();
        if(this.isRotated(imageMetadata)) {
            return this.rotateAndResizeImage(image);
        }
        return image.resize(this.defaultWidth, this.defaultHeight);
    }
}