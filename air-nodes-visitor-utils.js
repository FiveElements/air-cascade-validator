import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';


class AirVisitorNodesUtils {
    /**
     * Visist all child nodes of parent in order to find filter nodes
     * @param parent to visit
     * @param filter for the nodes
     * @param levelToVisit Number of child level to visit. -1 means visit all level.
     * @returns A Array Od filters nodes
     * @private
     */
    static computeFilterNodes(parent, filter, levelToVisit = -1) {
        const nodes = Array.prototype.slice.call(FlattenedNodesObserver.getFlattenedNodes(parent));
//                console.log('parent : ', parent, ' -- level : ', levelToVisit, '-->', nodes);
        const elements = nodes.reduce((acc, el) => {
            // Exclude not wanted search
            // ----------------------------
            const elTagName = el.tagName;
            if (!elTagName || elTagName === 'STYLE') {
                return acc;
            }
            // node with validation method
            // ----------------------------
            if (filter(el)) {
                acc.push(el);
                return acc;
            }
            // Determine Parent Type  Open Shadow root or direct Child
            // ----------------------------
            let elChild;
            if (levelToVisit !== 0) {
                const shadowNode = el.shadowRoot;
                if (shadowNode && (shadowNode.mode === 'open')) {
                    elChild = shadowNode;
                } else {
                    elChild = el;
                }
            }
            // Search in Parents
            // ----------------------------
            if (elChild) {
                const childElt = this.computeFilterNodes(elChild, filter, levelToVisit - 1);
                if (childElt && childElt.length > 0) {
                    acc.push(...childElt);
                }
                return acc;
            }
            return acc;
        }, []);
        return elements;
    };

}


/**
 * FiveElements Namespace definition
 */
window.FiveElements = window.FiveElements || {};

FiveElements.AirVisitorNodesUtils = AirVisitorNodesUtils;
