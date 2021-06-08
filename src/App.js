import './App.css';
import React from 'react';

class Header extends React.Component {
  render() {
      return (
      <div>
        <div className="biggest-head">
          <div className="head">
              <div class="logo-container-container">
                <img className="small-logo" src="small-logo.png" alt="Small Logo" />
                <div class="logo-container">
                  <h1>Delicious</h1>
                  <h3>THE BEST FOOD BLOG ON THE WEB</h3>
                </div>
                <div class="button-list">
                <ButtonList />
                </div>
              </div>
          </div>
        <div className="break"></div>
      </div>

          <div className="title">
            <h2>Chocolate Pizza</h2>
          </div>

          <h6>
            POSTED ON 15 DEC 2013 / DESSERTS
            <img className="print" src="print-icon.png" alt="Print Icon" />
            <caption>PRINT</caption>
          </h6>
      </div>
      );
  }
}

class ButtonList extends React.Component {
  render() {
    return (
      <div className="button-list">
              <button class="fb"></button>
              <button class="twit"></button>
              <button class="gp"></button>
              <button class="insta"></button>
              <button class="flic"></button>
              <button class="pint"></button>
              <button class="rss"></button>
              <button class="mail"></button>
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

class IngredientItem extends React.Component {
  render() {
    return (
        <li>
          <input type="checkbox" />
            {this.props.amount} {this.props.name}
        </li>
    )
  }
}

class IngredientsList extends React.Component {
  render() {
      return (
      <div className="ingredients"> 
        <ul className="ingredients-left">
            <IngredientItem amount="1 1/2 cups" name="milk" />
            <IngredientItem amount="1/2 tsp" name="pink salt" />
            <IngredientItem amount="1 lb" name="Black Mission Figs" />
            <IngredientItem amount="1/2 cup" name="mascarpone" />
            <IngredientItem amount="1/2 cup" name="brown sugar" />
            <IngredientItem amount="2-4 tbsp" name="water" />
        </ul>
        <ul className="ingredients-right">
            <IngredientItem amount="1/3 cup" name="granulated sugar" />
            <IngredientItem amount="2" name="egg yolks" />
            <IngredientItem amount="1 1/2 cups" name="heavy cream" />
            <IngredientItem amount="1" name="lemon, juiced" />
            <IngredientItem amount="2 tbsp" name="butter" />
            <IngredientItem amount="1 cup" name="honey roasted pecans, roughly chopped" />
        </ul>
    </div>
      )
    }
  }

class Body extends React.Component {
  render() {
    return (
      <div>
      <ImageSection />
      <Recipe />
      <IngredientsList />
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="break"></div>
          <footer>
            <article className="author">
              <img className="author-pic" src="van-pic.png" alt="Author" />
                <div className="author-info">
                  <h5>
                    Vanessa Stevenson
                  </h5>
                  <p>
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                  </p>
                </div>
              <button class="share-btn">
                SHARE RECIPE
              </button>
            </article>
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
      <Body />
      <Footer />
    </div>
  );
}

export default App;

