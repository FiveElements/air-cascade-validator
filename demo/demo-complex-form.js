import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-input/paper-input.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `demo-complex-form`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoComplexForm extends PolymerElement {
  static get template() {
    return html`
        <style include="iron-flex iron-flex-alignment">
            :host {
                display: block;
            }
        </style>
        <div class="flex">
            <h2>The Five Elements</h2>
            <div class="layout flex horizontal">
                <paper-input label="Firstname" value="{{data.five.firstname}}" required=""></paper-input>
                <paper-input label="Lastname" value="{{data.five.lastname}}" class="flex" required=""></paper-input>
            </div>
        </div>
        <div class="flex">
            <h2>The Taxi</h2>
            <div class="layout flex horizontal">
                <paper-input label="Firstname" value="{{data.taxi.firstname}}" required=""></paper-input>
                <paper-input label="Lastname" value="{{data.taxi.lastname}}" class="flex" required=""></paper-input>
            </div>
        </div>
        <div layout="" flex="" vertical="">
            <h2>The Bad man</h2>
            <template is="dom-repeat" items="[[data.badman]]">
                <div class="layout flex horizontal">
                    <paper-input label="Bad Men [[index]]" value="{{item.name}}" class="flex" minlength="5" required=""></paper-input>
                    <paper-input label="email" value="{{item.email}}" type="email"></paper-input>
                </div>
        
    </template>
    </div>
`;
  }

  static get is() {
      return 'demo-complex-form';
  }

  static get properties() {
      return {
          data: {
              type: Object,
              value: {
                  five: {
                      firstname: 'Leeloominaï',
                      lastname: 'Lekatariba Laminatchaï Ekbat De Sebat'
                  },
                  taxi: {
                      firstname: 'Korben',
                      lastname: 'Dallas'
                  },
                  badman: [
                      {name: 'Zorb', email: 'zorb@zorb.com'},
                      {name: 'Mangalores', email: 'manga'}
                  ],
              }
          }
      };
  }
}

window.customElements.define(DemoComplexForm.is, DemoComplexForm);
