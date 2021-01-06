import firebase from 'firebase/app'
import "firebase/auth"


export async function register(username, email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        firebase.auth().currentUser.updateProfile({displayName: username})
        return { message: "User successfully created" }
    } catch (error) {
        return error
    }
}

export async function login(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return {message: "User successfully signed in"}
    } catch (error) {
        return error
    }
}