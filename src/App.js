import {Component} from 'react'
import './App.css'
import ImagesAndButtons from './components/ImagesAndButtons'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeImageId: languageGreetingsList[0].id,
  }

  setActiveImgId = id => {
    this.setState({
      activeImageId: id,
    })
  }

  render() {
    const {activeImageId} = this.state
    const result = languageGreetingsList.filter(
      each => each.id === activeImageId,
    )
    const {imageAltText, imageUrl} = result[0]

    return (
      <div className="bg-container">
        <div className="center">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="list-style-none row">
            {languageGreetingsList.map(greet => (
              <ImagesAndButtons
                key={greet.id}
                details={greet}
                isActive={activeImageId === greet.id}
                setActiveImgId={this.setActiveImgId}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="img-size" />
        </div>
      </div>
    )
  }
}

export default App
