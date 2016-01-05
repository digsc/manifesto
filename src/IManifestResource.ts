module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
        //new(jsonld: any, options?: IManifestoOptions);
        options: IManifestoOptions;
        getLabel(): string;
        getMetadata(): any;
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getResourceById(id: string): IJSONLDResource;
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
    }
}