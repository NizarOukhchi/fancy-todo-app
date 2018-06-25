import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const tasksRef = databaseRef.child('tasks');

export const activitiesRef = databaseRef.child('activities');
