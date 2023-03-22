import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const data = values[0];
      const user = values[1];
      console.log(`${data.body} ${user.firstName} ${user.lastName}`);
    }, () => {
      console.log('Signup system offline');
    });
}
