import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementControllerService } from './services/element-controller.service';
import { GloomhavenElement } from './types/gloomhaven-element.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'fire_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/fireIconUse.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'wind_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/windIconUse.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'ice_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/iceIconUse.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'earth_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/earthIconUse.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'dark_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/darkIconUse.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'sun_useelement',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/elements/sunIconUse.svg')
    );
  }
  title = 'Frosthaven Helper';


}

