/*
 * File: componentB.js
 * File Created: Tuesday, 15th March 2022
 * Author: Bryce (Silverline CRM)
 * -----
 * Last Modified: Tuesday, 15th March 2022
 * Modified By: Bryce (Silverline CRM)
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import { LightningElement, wire } from 'lwc';

import { subscribe, MessageContext } from 'lightning/messageService';
import EXAMPLE_CHANNEL from '@salesforce/messageChannel/NicExample__c';

export default class ComponentB extends LightningElement {
	@wire(MessageContext)
	messageContext;

	text = 'Example';

	connectedCallback() {
		subscribe(
			this.messageContext,
			EXAMPLE_CHANNEL,
			(message) => this.doSomething(message)
		);
	}

	doSomething(message) {
		this.text = message.text
	}	
}