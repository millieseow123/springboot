import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { firstValueFrom, tap } from "rxjs";
import { RegisterUser } from "../models";

@Injectable()
export class CalendarService {
  //calendar, notes
  dataUrl: string = "";

  constructor(private http: HttpClient) {}




  register(registerUser: RegisterUser) {
    
    const formData = new FormData()
    formData.set('email',registerUser.email)
    formData.set('password',registerUser.password)
    formData.set('firstName',registerUser.firstName)
    formData.set('lastName',registerUser.lastName)
    formData.set('profilePic',registerUser.profilePicture)


    return firstValueFrom(this.http.post<any>("/register", formData));
  }

  login(email: string, password: string) {
    return firstValueFrom(
      this.http.post<any>("/login", { email, password }).pipe(
        tap((res) => {
          console.log(res.token);
          localStorage.setItem("token", res.token);
          localStorage.setItem("username", email);
        })
      )
    );
  }
}
