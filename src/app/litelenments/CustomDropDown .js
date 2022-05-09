import { LitElement, html } from 'lit-element';

export class CustomDropDown extends LitElement {
    render() {
        return html`<div class="dd-container">
            <div class="dd-label">DropDown</div>
            <div class="dd-head">
                <div class="dd-choice">Select</div>
            </div>
            <div class="dd-body">
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
            </div>
        </div>`;
    }
}
