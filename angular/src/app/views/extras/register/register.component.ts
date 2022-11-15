import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { S3 } from "@aws-sdk/client-s3";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { CalendarService } from "src/app/services/calendar.service";
import { RegisterUser } from "src/app/models";
import { Router } from "@angular/router";
import { profile } from "console";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  form!: FormGroup;
  imageURL!: any;

  constructor(
    private fb: FormBuilder,
    private calendarSvc: CalendarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  processRegistration() {
    const reg: RegisterUser = this.form.value as RegisterUser;

    console.log("register", reg);
    this.calendarSvc
      .register(reg)
      .then((result) => {
        console.log(result);
        this.router.navigate(["/dashboard/login"]);
        alert("Registration successful, please proceed to login");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed, please try again");
      });
  }

  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ mismatch: true });
    }
  }

  get password(): AbstractControl {
    return this.form.controls["password"];
  }

  get confirmPassword(): AbstractControl {
    return this.form.controls["confirmPassword"];
  }

  // async uploadFile(profilePic: File) {
  //   const s3Client = new S3({
  //     forcePathStyle: false,
  //     endpoint: "sgp1.digitaloceanspaces.com",
  //     region: "sgp1",
  //     credentials: {
  //       accessKeyId: "DO00ED4CLTRCNFNQUN6R",
  //       secretAccessKey: "97wcGF5xYD9Ee1nAjI5DAYAy/UUytPBqjOg2s8xl72s",
  //     },
  //   });

  //   const bucketParams = {
  //     Bucket: "schedulo",
  //     Key: "example",
  //     Body: profilePic,
  //   };

  //   try {
  //     const data = await s3Client.send(new PutObjectCommand(bucketParams));
  //     console.log(
  //       "Successfully uploaded object: " +
  //         bucketParams.Bucket +
  //         "/" +
  //         bucketParams.Key
  //     );
  //     return data;
  //   } catch (err) {
  //     console.log("Error", err);
  //   }

  //   // const contentType = profilePic.type;
  //   // const bucket = new S3({
  //   //   accessKeyId: "DO00ED4CLTRCNFNQUN6R",
  //   //   secretAccessKey: "97wcGF5xYD9Ee1nAjI5DAYAy/UUytPBqjOg2s8xl72s",
  //   //   region: "sgp1",
  //   //   endpoint: "https://schedulo.sgp1.digitaloceanspaces.com",
  //   // });
  //   // const params = {
  //   //   Bucket: "schedulo",
  //   //   Key: "schedulo/" + "test",
  //   //   Body: profilePic,
  //   //   ACL: "public-read",
  //   //   ContentType: contentType,
  //   // };
  //   // bucket.upload(params, (err: any, data: any) => {
  //   //   if (err) {
  //   //     console.log("There was an error uploading your file: ", err);
  //   //     return false;
  //   //   }
  //   //   console.log("Successfully uploaded file.", data);
  //   //   return true;
  //   // });
  // }
  selectFile(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }

  private createForm() {
    return this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required]),
      confirmPassword: this.fb.control("", [Validators.required]),
      firstName: this.fb.control("", [Validators.required]),
      lastName: this.fb.control("", [Validators.required]),
      profilePicture: this.fb.control(""),
    });
  }
}
