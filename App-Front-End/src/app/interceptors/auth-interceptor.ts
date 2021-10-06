import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class AuthInterceptor implements HttpInterceptor{

        intercept(req:HttpRequest<any>,next:HttpHandler):any{
                const idToken=localStorage.getItem("token");

                if(idToken){
                        const cloned=req.clone({
                                headers:req.headers.set("Authorization",idToken)
                        });
                        return next.handle(cloned);
                }
                else{
                        return next.handle(req);
                }
        }
}