module Manifesto {
    export interface ICanvas extends IManifestResource {
        getHeight(): number;
        getImages(): IAnnotation[];
        getThumbnail(options?: ThumbOptions): Thumb;
        getType(): CanvasType;
        getWidth(): number;
    }
}