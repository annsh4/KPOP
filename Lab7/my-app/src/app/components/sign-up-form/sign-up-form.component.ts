import { Component, Input, OnInit } from '@angular/core';
import { SignUpForm } from '../../models/sign-up-form';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public formModel: SignUpForm = new SignUpForm();

  constructor() { }

  ngOnInit(): void {
    this.formModel = new SignUpForm()
  }

  public getEmailError(): string {
    return !this.formModel.emailIsNotEmpty() ? 'Введите Email адрес' : !this.formModel.validateEmail() ? 'Неверный Email адрес' : '';
  }

  public getLoginError(): string {
    return !this.formModel.loginIsNotEmpty() ? 'Введите логин' : !this.formModel.validateLogin() ? 'Логин должен состоять только из латинских букв либо цифр' : '';
  }

  public getPasswordError(): string {
    return !this.formModel.passwordIsNotEmpty() ? 'Введите пароль' : '';
  }

  public getRepeatedPasswordError(): string {
    return !this.formModel.validatePassword() ? 'Пароли не совпадают' : '';
  }

  public getPhoneError(): string {
    return !this.formModel.validatePhone() ? 'Неверный номер' : '';
  }

  public getHomePageError(): string {
    return !this.formModel.validateHomePage() ? 'Неверный URL' : '';
  }

  public getFullNameError(): string {
    return !this.formModel.fullNameIsNotEmpty() ? 'Введите своё полное имя' : '';
  }

  public getSkypeError(): string {
    return !this.formModel.validateSkype() ? 'Ник Skype должен состоять только из латинских букв либо цифр' : '';
  }

  public handleSubmit() {
    alert(`${this.formModel.login}, Вы были успешно авторизованы!`);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
