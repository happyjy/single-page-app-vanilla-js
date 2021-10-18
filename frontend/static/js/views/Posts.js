import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <div>
              <a href="/posts/1"> post id 1</a>
            </div>
            <div>
              <a href="/posts/2"> post id 2</a>
            </div>
            <div>
              <a href="/posts/300"> post id 300</a>
            </div>
            <div>
              <a href="/posts/4000"> post id 4000</a>
            </div>

        `;
  }
}
