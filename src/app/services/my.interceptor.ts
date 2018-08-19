import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* request = request.clone({
            setHeaders: {
                Authorization: 'un token'
            }
        }); */

        console.log('----request----');
        console.log(request);
        console.log('--- end of request---');

        return next.handle(request)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log('----response----');
                        console.log(event);
                        console.log(event.status);
                        console.log('--- end of response---');
                    }
                }, error => {
                    console.log('----response----');
                    console.error(error.status);
                    console.error(error.message);
                    console.log('--- end of response---');

                })
            );
    }
}
