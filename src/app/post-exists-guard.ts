import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class PostExistsGuard implements CanActivate {
    constructor() { }


    canActivate(route: ActivatedRoute): boolean {
        if(){
            return true;
        }
        return false;
    }
}