import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { WizardConfigEndpointService } from 'src/app/services/wizard-config-endpoint.service';



@Component({
  selector: 'app-wizard-modal',
  templateUrl: './wizard-modal.component.html',
  styleUrls: ['./wizard-modal.component.scss']
})
export class WizardModalComponent implements OnInit, OnDestroy {

  private termination:Subject<null> = new Subject();
  private terminate$: Observable<null> = this.termination.asObservable();

 res:any;
  constructor(private wizardConfig : WizardConfigEndpointService) { }

  ngOnInit(): void {
  this.wizardConfig.getWizardConfig().pipe(takeUntil(this.terminate$)).subscribe(res => this.res = res)
  }

  ngOnDestroy(): void {
    this.termination.next();
    this.termination.complete();
  }

}


