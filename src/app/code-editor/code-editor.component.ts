import { Component, ViewEncapsulation } from '@angular/core';

import { CodeEditorService } from '../code-editor.service';
import { SysService } from '../sys.service';

declare var monaco: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeEditorComponent {
  constructor(
    private codeEditorService: CodeEditorService,
    private sysService: SysService
  ) {}

  codeEditorContent!: string;

  ngOnInit() {
    this.codeEditorService.load().subscribe(() => {
      this.initializeEditor();
    });

    // Subscribe to the isSysReady$ observable
    this.sysService.isSysReady$.subscribe((newValue) => {
      // Handle the updated value here
      console.log('New value:', newValue);
      // Perform any necessary actions
      if (newValue) {
        this.sysService.codeEditorContent = this.codeEditorContent;
      }
    });
  }

  initializeEditor() {
    const codeEditor = document.getElementById('code-editor__code-editor');

    // Create the Monaco Editor instance
    const editor = monaco.editor.create(codeEditor, {
      value:
        "// Please Provide the controller code in the javascript format in here.\n// Soon you'll be able to provide your code in the standard 'C' format.",
      language: 'javascript',
      fontSize: 12,

      minimap: {
        enabled: false,
      },

      scrollbar: {
        vertical: 'hidden',
        // verticalScrollbarSize: 10,
        // horizontalScrollbarSize: 10,
      },
    });

    monaco.editor.defineTheme('myTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        // { token: 'keyword', foreground: '#e27477' },
      ],
      colors: {
        'editor.background': '#252525',
        'editor.lineHighlightBackground': '#252525',
      },
    });

    monaco.editor.setTheme('myTheme');

    // Listen for changes in the editor's content
    editor.onDidChangeModelContent(() => {
      // Get the updated value
      let updatedValue = editor.getValue();

      // Perform further operations with the updated value
      this.codeEditorContent = updatedValue;
    });
  }
}
