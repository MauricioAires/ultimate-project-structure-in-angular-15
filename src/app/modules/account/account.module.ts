import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { InputModule, ButtonModule } from '@ui';
// Recomendação: utilizar alias com arquivo index para não ter várias importações
// de um mesmo alias

@NgModule({
  declarations: [],
  imports: [InputModule, ButtonModule, CommonModule, AccountRoutingModule],
})
export class AccountModule {}
