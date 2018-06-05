/**
`demo-editor`
Polymer Element demo-editor

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `demo-editor`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoEditor extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <paper-input label="Firstname" value="{{data.firstname}}" required=""></paper-input>
        <paper-input label="Lastname" value="{{data.lastname}}" required=""></paper-input>
        <paper-input label="email" value="{{data.email}}" type="email">
            <iron-icon icon="mail" slot="prefix"></iron-icon>
        </paper-input>
`;
  }

  static get is() {
      return 'demo-editor';
  }

  static get properties() {
      return {
          data: {
              type: Object,
              value: {
                  firstname:  null,
                  lastname: null,
                  email: 'toto'
              },
              notify: true
          }
      };
  }
}

window.customElements.define(DemoEditor.is, DemoEditor);
