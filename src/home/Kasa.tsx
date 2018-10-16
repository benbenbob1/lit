import * as React from "react";
import { Device, DeviceType } from "./Device";

export class KasaSwitch implements Device {
    alias: string;
    type = DeviceType.KasaSwitch;

    constructor(newAlias: string) {
        this.alias = newAlias;
        //Start (or use) singleton websocket to talk to fadecandy
        //Add self to websocket notify classes (newcolor command from client)
    }

    onclick() {
        
    }
}

export class Kasa {
    private static bridge?: Kasa;
    public static GetBridge() {
        if (Kasa.bridge != null) {
            return Kasa.bridge;
        } else {
            Kasa.bridge = new Kasa();
        }
    }

    private constructor() {
        
    }
}