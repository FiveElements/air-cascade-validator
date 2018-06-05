import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `demo-control`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoControl extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <paper-button>
            <iron-icon icon="check"></iron-icon>
            <span>Validate</span> is valid: <span>[[isValid]]</span>
        </paper-button>
`;
  }

  static get is() {
      return 'demo-control';
  }

  static get properties() {
      return {
          isValid: {
              type: Boolean
          }
      };
  }
}

window.customElements.define(DemoControl.is, DemoControl);
