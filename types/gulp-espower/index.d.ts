/// <reference types="node" />

declare namespace espower {
    interface Espower {
        /**
         * @param options Target patterns for power assert feature instrumentation.
         */
        (options?: Options): NodeJS.ReadWriteStream;
    }

    interface Options {
        patterns: string[];
    }
}

declare const espower: espower.Espower;

export = espower;
