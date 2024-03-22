import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from 'src/app/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UserService } from 'src/app/services/user.service';
import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  gender: string[] = ['Male', 'Female'];

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.checkToken().subscribe((response:any) => {
      this.router.navigate(['/cafe/dashboard']);
    }, (err : any) => {
      console.log(err);
    })
  }

  handleSignupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent, dialogConfig);
  }  
  
  handleForgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  handleLoginAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(LoginComponent, dialogConfig);
  }


}
