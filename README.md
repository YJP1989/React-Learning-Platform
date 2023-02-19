# React Learning Platform APP

Online study and discussion platform. Powered by `React` and `firebase`. [Click here.](https://yjp1989.github.io/React-Learning-Platform/)

<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/react&firebase.jpg?raw=true" width="500">

### Description

Learning platform is a website take full advantage of **Google book API** and **Google Firebase Realtime Database**. 
Users are availiable to 
- Resginter / login to save personal data and retrieve their offline or realtime chat messages, 
- Start a live chat with other users in any discussion group room.
- Search book, 
- Read book, 
- Add & remove books from personal library

## Technical Used

- React
- `firebase` packages to sign in with email / password and save user information in `Authentication`
- `firebase` packages to save data like image in `firebase storage`
- `firebase` packages to save personal book data and live chat messages in `Firestore Database`
- Axios API `Google Book API`
- `bootstrap` and `Font Awesome` packages to design frontend web page

## Schematic Diagram

#### Home Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/homepage.png?raw=true" width="1000">

#### Discussion Group Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/groupspage.png?raw=true" width="1000">

#### Live Chat Room Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/chatroom_react.png?raw=true" width="1000">

#### Login Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/loginpage.png?raw=true" width="1000">

#### Register Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/registerpage.png?raw=true" width="1000">

#### Books Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/bookspage.png?raw=true" width="1000">

#### Book Detail Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/bookdetail.png?raw=true" width="1000">

#### Personal Library Page:
<img src="https://github.com/YJP1989/React-Learning-Platform/blob/images/Learning%20platform%20app%20images/librarypage.png?raw=true" width="1000">

## Challenges
1. Connect frontend react app with backend firebase database
2. Didn't tried useReducer & useRedux 
3. Update profiles to firebase
4. Retrieve offtime and realtime chat messages from firebase database




### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
