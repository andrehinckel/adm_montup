import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector   : 'guia',
    templateUrl: './guia.component.html',
    styleUrls  : ['./guia.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class GuiaComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
