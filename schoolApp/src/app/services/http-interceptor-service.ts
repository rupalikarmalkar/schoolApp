import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()

export class HttpInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     throw new Error("Method not implemented.");
    // }
    // constructor( private _router: Router, private  _snackBar: MatSnackBar) {

    // }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(req).pipe(
    //         catchError(this.handleError)
    //     );
    // }
    // handleError(error: any) {

    //     // client-side error
    //     if (error.error instanceof ErrorEvent) {
    //         // display error message
    //         this._snackBar.open(error.message, "Error");
    //     }
    //     // server-side error
    //     else {
    //         if (error.status === 500) {
    //             //  redirect to error page 
    //             this._router.navigate(['/server-error']);
    //         } else {
    //             // display error message
    //             this._snackBar.open(error.message, "Error");
    //         }
    //     }
    //     return throwError(error.message);
    // }
}
