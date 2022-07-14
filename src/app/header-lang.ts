import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class HeaderLang implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({headers: req.headers.set('Accept-Language', 'fr-FR')});
        console.log("INTERCEPTOR IS RUNNING");
        return next.handle(req)
    }
}
