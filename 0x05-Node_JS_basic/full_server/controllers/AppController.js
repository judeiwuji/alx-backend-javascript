/* eslint class-methods-use-this: ["error",
{ "exceptMethods": ["getHomepage"] }] */
export default class AppController {
  getHomepage(request, response) {
    response.send('Hello Holberton School!');
  }
}
