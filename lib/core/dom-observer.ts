export class SzDomObserver {


    public static test(targetNode: HTMLElement): void {
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, characterData: true, subtree: true };

        console.log(targetNode, 'targetNode');
        // Callback function to execute when mutations are observed
        const callback = (mutationsList: any, observer: any) => {
            // Use traditional 'for loops' for IE 11
            console.log(mutationsList, observer);
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('A child node has been added or removed.');
                }
                else if (mutation.type === 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new SzMutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode.parentElement, config);

        // Later, you can stop observing
       // observer.disconnect();
    }
}

export class SzMutationObserver extends MutationObserver {

    disconnect(): void {
        super.disconnect();
        console.log('disconnected');
    }

}