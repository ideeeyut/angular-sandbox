// import { Injectable, NgZone } from '@angular/core';
// // import { auth } from 'firebase/app';
// import { User } from "./user";
// import { Router } from "@angular/router";
// import { AngularFireAuth } from "@angular/fire/compat/auth";

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService {
//     user: User;
//     constructor(
//         public router: Router,
//         public ngZone: NgZone,
//         public auth: AngularFireAuth,
//         private angularFireAuth: AngularFireAuth
//     ) {
//         this.auth.authState.subscribe(user => {
//             this.user = user;
//         })
//     }
//     // Firebase SignInWithPopup
//     OAuthProvider(provider) {
//         return this.auth.signInWithPopup(provider)
//             .then((res) => {
//                 this.ngZone.run(() => {
//                     this.router.navigate(['dashboard']);
//                 })
//             }).catch((error) => {
//                 window.alert(error)
//             })
//     }
//     // Firebase Google Sign-in
//     SigninWithGoogle() {
//         return this.auth.signInWithPopup(new this.auth)
//         return this.OAuthProvider(new auth.GoogleAuthProvider())
//             .then(res => {
//                 console.log('Successfully logged in!')
//             }).catch(error => {
//                 console.log(error)
//             });
//     }
//     // Firebase Logout
//     SignOut() {
//         return this.afAuth.auth.signOut().then(() => {
//             this.router.navigate(['login']);
//         })
//     }
// }
