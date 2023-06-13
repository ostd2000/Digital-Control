import { Injectable } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeEditorService {
  private isLoaded!: boolean;

  load(): Observable<void> {
    if (this.isLoaded) {
      return from(Promise.resolve());
    }

    return new Observable((observer: Observer<void>) => {
      const onGotAmdLoader = () => {
        // Load monaco
        (<any>window).require.config({
          paths: { vs: 'assets/monaco-editor/min/vs' },
        });

        (<any>window).require(['vs/editor/editor.main'], () => {
          this.isLoaded = true;

          observer.next();
          observer.complete();
        });
      };

      // Load AMD loader if necessary
      if (!(<any>window).require) {
        const loaderScript = document.createElement('script');
        loaderScript.type = 'text/javascript';
        loaderScript.src = 'assets/monaco-editor/min/vs/loader.js';
        loaderScript.addEventListener('load', onGotAmdLoader);
        document.body.appendChild(loaderScript);
      } else {
        onGotAmdLoader();
      }
    });
  }
}
