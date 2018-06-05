import '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import './air-nodes-visitor-utils.js';

/**
 * FiveElements Namespace definition
 */
window.FiveElements = window.FiveElements || {};


/**
 * @polymerMixin
 */
FiveElements.AirCascadeValidatorMixin = (superclass) => class extends superclass {


    static get properties() {
        return {
            novalidate: {
                type: Boolean
            },
            isValid: {
                type: Boolean,
                notify: true
            },
            invalidNodes: {
                type: Array,
                notify: true
            },
            autoFocus: {
                type: Boolean
            },
            debug: {
                type: Boolean
            }
        };
    }

    // --- Life Cycle
    // --- ---------------------------

    disconnectedCallback() {
        super.disconnectedCallback();
        this.invalidNodes = undefined;
    }

    // --- Public Api
    // --- ---------------------------
    validatePromise() {
        return new Promise((resolve, error) => {
            const valid = this.validate();
            resolve(valid);
        });
    }


    /**
     * Validates all the required elements (custom and native) in the form.
     * @param {function} callback(valid, invalidNodes) { return invalidNode}
     * @return {boolean} True if all the elements are valid.
     */
    validate(callback) {
        const cb = callback || (this.autoFocus ? this.focusInvalidNode.bind(this) : undefined);
        return this.validateWithCallback(cb);
    }

    /**
     * Validates all the required elements (custom and native) in the form.
     * @param {funcion} callback(valid, invalidNodes) { return invalidNode}
     * @return {boolean} True if all the elements are valid.
     */
    validateWithCallback(callback) {
        const invalidNodes = this.getInvalidNodes();
        const valid = invalidNodes.length < 1;
        if (this.debug) console.log('Form is valid ==> ', valid, '<---- with ----', invalidNodes);
        this.invalidNodes = invalidNodes;
        this.isValid = valid;
        let invalidNode;
        if (callback) {
            invalidNode = callback(valid, invalidNodes);
        }
        this._fireValidateEvent(valid, invalidNodes, invalidNode);
        return valid;
    }

    /**
     * Focus on a selection of possible nodes
     * @param selectedNodes a selection of nodes or the this.invalidNodes context is undefined
     * @return {node} The focused node
     */
    focusInvalidNode(valid, selectedNodes) {
        if (!valid) {
            const invalidNodes = selectedNodes || this.invalidNodes;
            const invalidNode = this._selectInvalidNodes(invalidNodes);
            return this._callFocus(invalidNode);
        }
    }

    // --- Event
    // --- ---------------------------
    /**
     * Fired when a valide method result.
     *
     * @event air-validate
     */
    _fireValidateEvent(valid, invalidNodes, invalidNode) {
        const validateEvent = {valid, invalidNodes, invalidNode};
        this.dispatchEvent(new CustomEvent('air-validate', {
            detail: validateEvent,
            bubbles: true,
            composed: true
        }));
        return validateEvent;
    }

    // --- Utils
    // --- ---------------------------

    _callFocus(node) {
        if (node.focusInvalidNode) {
            return node.focusInvalidNode();
        }
        node.focus();
        return node;
    }

    _selectInvalidNodes(invalidNodes) {
        let selected;
        if (invalidNodes && invalidNodes.length > 0) {
            selected = invalidNodes[0];
        }
        return selected;
    }


    // --- Node visitors
    // --- ---------------------------

    /**
     * Validates all the required elements (custom and native) in the form.
     * @return {boolean} True if all the elements are valid.
     */
    getInvalidNodes() {
        if (this.novalidate) {
            return true;
        }

        const elements = this._getValidatableElements(this);
        if (this.debug) console.log("Validate elements:", elements);

        // Go through all the elements, and validate the custom ones.
        const invalidNodes = elements.filter(el => {
//                // This is weird to appease the compiler. We assume the custom element
//                // has a validate() method, otherwise we can't check it.
            let validatable = /** @type {{validate: (function() : boolean)}} */ (el);
            if (validatable.validate) {
                const elValid = validatable.validate();
                if (this.debug) console.log('test elements is valid', validatable, '==>', elValid, '=', el.value);
                return !elValid;
            }
            return false;
        });
        return invalidNodes;
    }


    /**
     * Get Validatable Nodes by Visit all node of the given parent
     * @param parent to visit
     * @return A Array of validatable Nodes
     */
    _getValidatableElements(parent) {
        const validatableElts = FiveElements.AirVisitorNodesUtils.computeFilterNodes(parent, (el) => {
            if (el.validate) {
                return true;
            }
            return false;
        });
        return validatableElts;
    }


    // --- End
    // --- ---------------------------
};
