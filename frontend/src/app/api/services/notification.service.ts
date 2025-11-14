import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class NotificationService {

    private mensageSource = new BehaviorSubject<string | null>(null);
    currentMessage = this.mensageSource.asObservable();

    mostarMensaje(mensaje: string) {
        this.mensageSource.next(mensaje);
    }

    limpiarMensaje() {
        this.mensageSource.next(null);
    }
}
