import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  constructor(private formbuild: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuild.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const username = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService.autentication(username, password)
      .subscribe(() => {
        console.log('autenticado');
        this.router.navigate(['user', username]);
      },
        err => {
          alert('Erro');
          this.loginForm.reset();
        });
  }
  ngOnDestroy(): void {

  }

}
