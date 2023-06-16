import { Injectable } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private isLoaded!: boolean;

  load(): Observable<void> {
    if (this.isLoaded) {
      return from(Promise.resolve());
    }

    return new Observable((observer: Observer<void>) => {
      const onGotAmdLoader = () => {
        // Load math
        (<any>window).require.config({
          paths: { vs: 'assets/js' },
        });

        (<any>window).require(['vs/editor/editor.main', 'vs/mat'], () => {
          this.isLoaded = true;

          observer.next();
          observer.complete();
        });
      };

      onGotAmdLoader();
    });
  }
}
