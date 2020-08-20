import { html, fixture, expect } from '@open-wc/testing';

import '../src/lit-element-landing-page.js';

describe('LandingPage', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <lit-element-landing-page></lit-element-landing-page> `
    );
  });

  it('renders a main', () => {
    const main = element.shadowRoot.querySelector('main');
    expect(main).to.exist;
    expect(main.className).equal('main-content');
  });

  it('renders a hello-content', () => {
    const hello = element.shadowRoot.querySelector('.hello-content h1');
    expect(hello).to.exist;
    expect(hello.textContent).to.be.equal('Hello LitElement¡¡');
  });

  it('render a div with presentationContentClass', () => {
    const hello = element.shadowRoot.querySelector('.presentation-content');
    expect(hello).to.exist;
  });

  it('getPresentationContextText return default value', () => {
    const hello = element.getPresentationContextText();
    expect(hello).to.be.equal(
      '¡Hola! Soy yo, desarrolladora web, y en este proyecto batalleo con:'
    );
  });

  it('not renders a img tag if avatarSrc is not informed', () => {
    const img = element.shadowRoot.querySelector('img');
    expect(img).to.not.exist;
  });

  it('renders a image if avatarSrc is informed', async () => {
    const landing = await fixture(
      html`
        <lit-element-landing-page avatarSrc="./"></lit-element-landing-page>
      `
    );

    const img = landing.shadowRoot.querySelector('img');
    expect(img).to.exist;
  });

  it('renders a image if avatarSrc is informed', async () => {
    const landing = await fixture(
      html` <lit-element-landing-page name="lol"></lit-element-landing-page> `
    );

    const hello = landing.getPresentationContextText();
    expect(hello).to.be.equal(
      '¡Hola! Soy lol, desarrolladora web, y en este proyecto batalleo con:'
    );
  });

  it('render as many li tags as tecnologies', () => {
    const liList = element.shadowRoot.querySelectorAll('li');
    expect(liList.length).to.be.equal(element.tecnologies.length);
    liList.forEach((li, index) => {
      expect(li.textContent).to.be.equal(element.tecnologies[index]);
    });
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
