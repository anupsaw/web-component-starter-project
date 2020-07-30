export class SzSliderConfig {
    public hasBackdrop = false;
    public maxWidth = '600px';

    private constructor(config: Partial<SzSliderConfig> = {}) {
        // for (const key in config) {
        //     if (key && this.hasOwnProperty(key)) {
        //         this[key] = config[key];
        //     }
        // }
    }

    public static create(config: Partial<SzSliderConfig> = {}): SzSliderConfig {
        return new SzSliderConfig(config);
    }
}