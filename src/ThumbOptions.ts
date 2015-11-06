module Manifesto {
    export class ThumbOptions {
        constructor(public square: boolean,
                    public size: ThumbSize,
                    public minimum: ThumbSize,
                    public maximum: ThumbSize,
                    public followInfoJson: boolean) {
        }
    }
}