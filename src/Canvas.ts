var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");

module Manifesto {
    export class Canvas extends ManifestResource implements ICanvas{

        ranges: IRange[] = [];

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getImages(): IAnnotation[] {

            var images: IAnnotation[] = [];

            if (!this.__jsonld.images) return images;

            for (var i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];

                var annotation = new Annotation(a, this.options);
                images.push(annotation);
            }

            return images;
        }

        getThumbnail(options?: ThumbOptions): Thumb {

            var thumb: Thumb = new Thumb();

            var thumbnail = this.getProperty('thumbnail');

            if (thumbnail) {

                // shortcut if caller doesn't care about size
                if (!options.size && !options.minimum && !options.maximum) {
                    if (_isString(thumbnail)){
                        thumb.uri = thumbnail;
                        return thumb;
                    } else if (_isArray(thumbnail) && _isString(thumbnail[0])){
                        thumb.uri = thumbnail[0];
                        return thumb;
                    }
                }

                // first image resource in thumbnail property/array
                var thumbImageResource: IResource;

                if (_isArray(thumbnail)){
                    thumbImageResource = thumbnail[0];
                } else {
                    thumbImageResource = thumbnail;
                }

                var thumbInfo: ThumbInfo = this._getThumbFromImageResource(thumbImageResource, options);



            }
            //var uri;
            //var images: IAnnotation[] = this.getImages();
            //
            //if (images && images.length) {
            //    var firstImage = images[0];
            //    var resource: IResource = firstImage.getResource();
            //    var services: IService[] = resource.getServices();
            //
            //    for (var i = 0; i < services.length; i++) {
            //        var service:IService = services[i];
            //        var profile:string = service.getProfile().toString();
            //        var id = service.id;
            //
            //        if (!_endsWith(id, '/')) {
            //            id += '/';
            //        }
            //
            //        if (profile === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
            //            profile === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
            //            profile === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
            //            profile === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
            //            profile === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
            //            profile === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
            //            profile === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
            //            profile === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
            //            profile === ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
            //            profile === ServiceProfile.IIIF1IMAGELEVEL2.toString()){
            //            uri = id + 'full/' + width + ',' + height + '/0/native.jpg';
            //        } else if (
            //            profile === ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
            //            profile === ServiceProfile.IIIF2IMAGELEVEL2.toString()) {
            //            uri = id + 'full/' + width + ',' + height + '/0/default.jpg';
            //        }
            //    }
            //}
            //
            //return uri;
        }

        private _getThumbFromImageResource(imageResource: IResource, options: ThumbOptions): ThumbInfo{

            var imageService: IImageService = Utils.getImageService(imageResource);
            // (the first service property with a recognised IIIF image service profile)
            // it's possible the image resource does not have a service

            // we need the profile, which MUST be present in the manifest, and the sizes array, which might not be.
            if(options.followInfoJson && imageService && (!imageService.sizes || !Utils.getAuthService(<IResource>imageService))){
                
                imageService = (dereference info.json into what we hope is a more detailed service object)
            }
        }

        getType(): CanvasType {
            return new CanvasType(this.getProperty('@type').toLowerCase());
        }

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }
    }
}
