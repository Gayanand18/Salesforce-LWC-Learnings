import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, openTab} from 'lightning/platformWorkspaceApi'
export default class OpenNewTab extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openTab({
                recordId:'001bm00000gC8knAAC',
                label:'Troop',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
        
    }

    openTabUrl(){
        if(this.isConsoleNavigation){
            openTab({
                url:'/lightning/r/Account/001bm00000gC8knAAC/view',
                label:'Troop Url',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
    //pageReference, recordId, and url are prioritized in that order.
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openTab({
            pageReference:{
                type:'standard__objectPage',
                attributes:{
                    objectApiName:'Account',
                    actionName:'list'
                }
            },
                label:'Accounts list',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
}