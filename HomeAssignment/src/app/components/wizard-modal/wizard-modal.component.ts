import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { Step } from 'src/app/typs/step';
import { WizardConfigEndpointService } from 'src/app/services/wizard-config-endpoint.service';

@Component({
  selector: 'app-wizard-modal',
  templateUrl: './wizard-modal.component.html',
  styleUrls: ['./wizard-modal.component.scss'],
})
export class WizardModalComponent implements OnInit, OnDestroy {
  private termination: Subject<null> = new Subject();
  private terminate$: Observable<null> = this.termination.asObservable();

  wizard: any;
  wizardSteps: Step[];
  completedState: { id: number; isCompleted: boolean }[] = [];

  constructor(private wizardConfig: WizardConfigEndpointService) {}

  ngOnInit(): void {
    this.wizardConfig
      .getWizardConfig()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.wizard = res;
        this.wizardSteps = res.steps;
        for (let i = 0; i < res.steps.length; i++) {
          this.completedState.push({
            id: i,
            isCompleted: false,
          });
        }
      });
  }

  completed($event: any, i: number) {
    if ($event.target.type === 'checkbox') {
      this.completedState[i].isCompleted = !!$event.target.checked;
    } else {
      this.completedState[i].isCompleted = !!$event.target.value;
    }
  }
  ngOnDestroy(): void {
    this.termination.next();
    this.termination.complete();
  }
}
