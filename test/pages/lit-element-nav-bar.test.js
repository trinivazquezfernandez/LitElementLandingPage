import { html, fixture, expect } from '@open-wc/testing';
import '../src/lit-element-nav-bar.js';

describe('Navigation bar', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(
      html` <lit-element-nav-bar></lit-element-nav-bar> `
    );
  });

  it('has toggle property', () => {
    const { toggle } = element;

    expect(toggle).to.exist;
    expect(toggle).to.be.false;
  });

  it('has links property', () => {
    const { links } = element;

    expect(links).to.exist;
    expect(links[0]).to.exist;
    expect(links[1]).to.exist;
    expect(links[0].text).to.be.equal('Marcar mapa');
    expect(links[0].activeClass).to.be.equal('');
    expect(links[0].href).to.be.equal('/');
    expect(links[1].text).to.be.equal('Inicio');
    expect(links[1].activeClass).to.be.equal('active');
    expect(links[1].href).to.be.equal('/');
  });

  it('render a main-menu-container', () => {
    const mainMenuContainer = element.shadowRoot.querySelector(
      'div.main-menu-container'
    );

    expect(mainMenuContainer).to.exist;
  });

  it('render many menu elements as links property length', () => {
    const { links } = element;
    const aTags = element.shadowRoot.querySelectorAll(
      'div.main-menu-container a.menu'
    );

    expect(aTags.length).to.be.equal(links.length);
  });

  it('render menu elements as expected', () => {
    const aTags = element.shadowRoot.querySelectorAll(
      'div.main-menu-container a.menu'
    );

    expect(aTags[0].className).to.be.equal('menu ');
    expect(aTags[0].getAttribute('toggle')).to.be.equal('false');
    expect(aTags[0].getAttribute('href')).to.be.equal('/');
    expect(aTags[0].text).to.be.equal('Marcar mapa');
    expect(aTags[1].className).to.be.equal('menu active');
    expect(aTags[1].getAttribute('toggle')).to.be.equal('false');
    expect(aTags[1].getAttribute('href')).to.be.equal('/');
    expect(aTags[1].text).to.be.equal('Inicio');
  });

  it('render icon element', () => {
    const aIcon = element.shadowRoot.querySelector(
      'div.main-menu-container a.icon'
    );
    expect(aIcon).exist;
  });

  it('toggleMenu funcion change the value to the toggle property', () => {
    const initialToggle = element.toggle;
    element.toggleMenu();

    expect(initialToggle).to.be.equal(!element.toggle);
  });
});
