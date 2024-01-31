import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

export const authGuard = () => {
  const accountService = inject(AccountService);
  const toast = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else{
        toast.error('You shall not pass!');
        return false;
      }
    })
  );
};
