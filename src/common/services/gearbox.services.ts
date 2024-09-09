import { Injectable } from "@angular/core";
import { gearboxEnum } from "../enums/gearbox.enums";
import { VoitureObj } from "../objects/voiture.object";

@Injectable({
    providedIn: 'root'
})

export class GearboxService {

    public downShift(voiture: VoitureObj, quantity: number) {
        let newGear = gearboxEnum.neutre;
        let consoBrake = 0;
        let consoFuel = 0;
        let consoEngine = 0;
        let actualGear = voiture.getGear();
        if (quantity > 3) {
            quantity = 3
        } else if (quantity < 1 || quantity == null || quantity == undefined) {
            quantity = 1
        }

        switch (quantity) {

            case 1:
                switch (actualGear) {
                    case gearboxEnum.un:
                        console.error('can\'t -' + quantity + ' clutch from one')
                        break;
                    case gearboxEnum.deux:
                        newGear = gearboxEnum.un;
                        console.log(gearboxEnum.deux + " Downshift " + gearboxEnum.un + "!");
                        break;
                    case gearboxEnum.trois:
                        newGear = gearboxEnum.deux;
                        console.log(gearboxEnum.trois + " Downshift " + gearboxEnum.deux + "!");
                        break;
                    case gearboxEnum.quatre:
                        newGear = gearboxEnum.trois;
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.trois + "!");
                        break;
                    case gearboxEnum.cinq:
                        newGear = gearboxEnum.quatre;
                        console.log(gearboxEnum.cinq + " Downshift " + gearboxEnum.quatre + "!");
                        break;
                    case gearboxEnum.six:
                        newGear = gearboxEnum.cinq;
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        break;
                    default:
                }
                break;

            case 2:
                switch (actualGear) {
                    case gearboxEnum.un:
                        console.error('can\'t -' + quantity + ' clutch from gear one')
                        break;

                    case gearboxEnum.deux:
                        console.error('can\'t -' + quantity + ' clutch from gear two')
                        break;
                    case gearboxEnum.trois:
                        newGear = gearboxEnum.un
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        consoFuel++;
                        break;
                    case gearboxEnum.quatre:
                        newGear = gearboxEnum.deux
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        consoFuel++;
                        break;
                    case gearboxEnum.cinq:
                        newGear = gearboxEnum.trois
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        consoFuel++;
                        break;
                    case gearboxEnum.six:
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        newGear = gearboxEnum.quatre
                        consoFuel++;
                        break;
                    default:
                }
                break;

            case 3:
                switch (actualGear) {
                    case gearboxEnum.un:
                        console.error('can\'t -' + quantity + ' clutch from gear one')
                        break;

                    case gearboxEnum.deux:
                        console.error('can\'t -' + quantity + ' clutch from gear two')
                        break;
                    case gearboxEnum.trois:
                        console.error('can\'t -' + quantity + ' clutch from gear three')
                        break;
                    case gearboxEnum.quatre:
                        newGear = gearboxEnum.un
                        console.log(gearboxEnum.quatre + " Downshift " + gearboxEnum.un + "!");
                        consoFuel++;
                        break;
                    case gearboxEnum.cinq:
                        newGear = gearboxEnum.deux
                        console.log(gearboxEnum.cinq + " Downshift " + gearboxEnum.deux + "!");
                        consoFuel++;
                        break;
                    case gearboxEnum.six:
                        newGear = gearboxEnum.trois
                        console.log(gearboxEnum.six + " Downshift " + gearboxEnum.trois + "!");
                        consoFuel++;
                        break;
                    default:
                }
                break;
            default:
                console.log("quantity default for downshift");
        }
        voiture.setEngine(voiture.getEngine() - consoEngine);
        voiture.setBrake(voiture.getBrake() - consoBrake);
        voiture.setFuel(voiture.getFuel() - consoFuel);
        voiture.setGear(newGear);
    }

    public upShift(voiture: VoitureObj) {
        let newGear = gearboxEnum.neutre;
        switch (voiture.getGear()) {
            case gearboxEnum.neutre:
                newGear = gearboxEnum.un;
                console.log(gearboxEnum.neutre + " Upshift " + gearboxEnum.un + "!");
                break;
            case gearboxEnum.un:
                newGear = gearboxEnum.deux;
                console.log(gearboxEnum.un + " Upshift " + gearboxEnum.deux + "!");
                break;
            case gearboxEnum.deux:
                newGear = gearboxEnum.trois;
                console.log(gearboxEnum.deux + " Upshift " + gearboxEnum.trois + "!");
                break;
            case gearboxEnum.trois:
                newGear = gearboxEnum.quatre;
                console.log(gearboxEnum.trois + " Upshift " + gearboxEnum.quatre + "!");
                break;
            case gearboxEnum.quatre:
                newGear = gearboxEnum.cinq;
                console.log(gearboxEnum.quatre + " Upshift " + gearboxEnum.cinq + "!");
                break;
            case gearboxEnum.cinq:
                newGear = gearboxEnum.six;
                console.log(gearboxEnum.cinq + " Upshift " + gearboxEnum.six + "!");
                break;
            case gearboxEnum.six:
                console.error("no 7 gear");
                break;
            default:
                console.log("tried to upshift whil clutched");
        }
        voiture.setGear(newGear);
    }
}