import './App.css';
import React from 'react';

class Header extends React.Component {
  render() {
      return (
        <div>
          <img src="small-logo.png" alt="Small Logo" />
          <h1>Delicious</h1>
          <h5>THE BEST FOOD BLOG ON THE WEB</h5>
          <span class="sm-logos-1">
              <img src="fb-icon.png" alt="Facebook icon" />
              <img src="twit-icon.png" alt=" Twitter icon" />
              <img src="gp-icon.png" alt="Google plus icon" />
              <img src="insta-icon.png" alt="Instagram icon" />
              <img src="flic-icon.png" alt="Flickr icon" />
              <img src="pint-icon.png" alt="Pinterest icon" />
          </span>
          <span class="sm-logos-2">
              <img src="rss-icon.png" alt="RSS icon" />
              <img src="mail-icon.png" alt="Email icon" />
          </span>
        </div>
      );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h2>Chocolate Pizza</h2>
        <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>
        <img src="print-icon.png" alt="Print Icon" />
        <caption>PRINT</caption>
      </div>
    )
  }
}

class ImageSection extends React.Component {
  render() {
      return <>
          <img src="choco-pizza.png" alt="Chocolate Pizza"/>
          </>
    }
  }

class Recipe extends React.Component {
  render() {
    return (
      <div>
        <p>
            For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan wiht water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
        </p>
        <p>
            Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
        </p>
        <p>
            Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer intructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
        </p>
      </div>
    )
  }
}

class Ingredients extends React.Component {
  render() {
      return <>
      <div class="recipe">
        <ul>
            <li>1 1/2 cups milk</li>
            <li>1/2 cup mascarpone</li>
            <li>1/2 tsp pink salt</li>
            <li>1 lb Black Mission Figs</li>
            <li>1/2 cup brown sugar</li>
            <li>2-4 tbsp water</li>
        </ul>
        <ul>
            <li>1 1/2 cups heavy cream</li>
            <li>1/3 granulated sugar</li>
            <li>2 egg yolks</li>
            <li>1 lemon, juiced</li>
            <li>2 tbsp butter</li>
            <li>1 cup honey roasted pecans, roughly chopped</li>
        </ul>
      </div>
          </>
    }
  }

class Author extends React.Component {
    render() {
      return (
        <div class="author">
          <article>
            <img src="van-pic.png" alt="Author" />
              <h5>
                Vanessa Stevenson
              </h5>
              <p>
                Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
              </p>
            <button type="button">SHARE RECIPE</button>
          </article>
        </div>
      )
    }
  }

class Footer extends React.Component {
  render() {
    return (
      <div>
          <footer>
            <img src="small-logo.png" alt="Small logo"/>
            <caption>
            Delicious 2013 | All Rights Reserved. Proudly published with Ghost.
            </caption>
          </footer>
      </div>
    )
  }
}

// Parent container
function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <ImageSection />
      <Recipe />
      <Ingredients />
      <Author />
      <Footer />
    </div>
  );
}

export default App;

