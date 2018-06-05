/**

The `air-cascade-validator` provides cascade validation for all nodes

@group air Elements
@element air-cascade-validator
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './air-cascade-validator-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `air-cruddy`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AirCascadeValidator extends  FiveElements.AirCascadeValidatorMixin(PolymerElement) {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <slot id="dataForm"></slot>
`;
  }

  static get is() { return 'air-cascade-validator'; }
}

window.customElements.define(AirCascadeValidator.is, AirCascadeValidator);
