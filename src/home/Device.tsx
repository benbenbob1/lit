import * as React from "react";

export enum DeviceType {
    MonoLightStrip = 0,
    PolyLightStrip,
    KasaSwitch,
    KasaPlug
}

export abstract class Color {
    hsv: [number, number, number];
    //static conversion methods, etc
}

export interface Device {
    alias: string;
    type: DeviceType;
    onclick(): void;
}

export class MonoLightStrip implements Device {
    alias = "MonoStrip";
    type = DeviceType.MonoLightStrip;

    //private status: StripStatus;

    constructor(newAlias: string) {
        this.alias = newAlias;
        //Start (or use) singleton websocket to talk to fadecandy
        //Add self to websocket notify classes (newcolor command from client)
    }

    newColor(newColor: Color) {

    }

    onclick() {
        //TODO: create, open colorpicker
    }

}

