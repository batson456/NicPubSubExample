/*
 * File: componentA.js
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
import { publish, MessageContext } from 'lightning/messageService';
import EXAMPLE_CHANNEL from '@salesforce/messageChannel/NicExample__c';

export default class ComponentA extends LightningElement {
	@wire(MessageContext)
	messageContext;



	doSomething() {
		publish(
			this.messageContext,
			EXAMPLE_CHANNEL,
			{
				text: this.template.querySelector('.textbox').value
			}
		)
	}
}