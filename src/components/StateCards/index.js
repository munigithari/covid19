import {Component} from 'react'
import './index.css'

class StateCards extends Component {
  state = {
    confirmedCard: {},
    recoveredCard: {},
    deceasedCard: {},
    activeCard: {},
  }

  componentDidMount() {
    this.totalDistrict()
  }

  totalDistrict = async () => {
    const {totalStateCards} = this.props
    const districtConfirmed = totalStateCards.confirmed
    const districtRecovered = totalStateCards.recovered
    const districtDeceased = totalStateCards.deceased
    const districtActive =
      districtConfirmed - districtRecovered - districtDeceased

    const confirmedCard = {
      name: 'Confirmed',
      logo: 'https://res.cloudinary.com/charani/image/upload/v1636464213/check-mark_1_lisuol.png',
      value: districtConfirmed,
    }

    const activeCard = {
      name: 'Active',
      logo: 'https://res.cloudinary.com/charani/image/upload/v1636464213/protection_1_cp5pye.png',
      value: districtActive,
    }

    const recoveredCard = {
      name: 'Recovered',
      logo: 'https://res.cloudinary.com/charani/image/upload/v1636464213/recovered_1_mdqlwz.png',
      value: districtRecovered,
    }

    const deceasedCard = {
      name: 'Deceased',
      logo: 'https://res.cloudinary.com/charani/image/upload/v1636464213/breathing_1_qmzlyj.png',
      value: districtDeceased,
    }

    this.setState({
      confirmedCard,
      activeCard,
      recoveredCard,
      deceasedCard,
    })
  }

  cardClick = value => {
    const {stateListCards} = this.props
    stateListCards(value)
  }

  render() {
    const {confirmedCard, activeCard, recoveredCard, deceasedCard} = this.state

    const {isStateCard} = this.props
    const isDistrictCard = isStateCard ? 'background-color' : ''

    return (
      <>
        <ul className="stateCards-container">
          <li
            className={`StateCard-background ${confirmedCard.name} ${isDistrictCard}`}
            tabIndex="-1"
            key={confirmedCard.name}
            value={confirmedCard.name}
            onClick={() => this.cardClick(confirmedCard.name)}
          >
            <div data-testid="stateSpecificConfirmedCasesContainer">
              <p className="home-paragraph-heading">{confirmedCard.name}</p>
              <img
                src={confirmedCard.logo}
                alt="state specific confirmed cases pic"
                className="home-cards-logo"
              />
              <p className="home-paragraph-heading ">{confirmedCard.value}</p>
            </div>
          </li>
          <li
            className={`StateCard-background ${activeCard.name}`}
            tabIndex="-1"
            key={activeCard.name}
            value={activeCard.name}
            onClick={() => this.cardClick(activeCard.name)}
          >
            <div data-testid="stateSpecificActiveCasesContainer">
              <p className="home-paragraph-heading">{activeCard.name}</p>
              <img
                src={activeCard.logo}
                alt="state specific active cases pic"
                className="home-cards-logo"
              />
              <p className="home-paragraph-heading">{activeCard.value}</p>
            </div>
          </li>

          <li
            className={`StateCard-background ${recoveredCard.name}`}
            tabIndex="-1"
            key={recoveredCard.name}
            value={recoveredCard.name}
            onClick={() => this.cardClick(recoveredCard.name)}
          >
            <div data-testid="stateSpecificRecoveredCasesContainer">
              <p className="home-paragraph-heading">{recoveredCard.name}</p>
              <img
                src={recoveredCard.logo}
                alt="state specific recovered cases pic"
                className="home-cards-logo"
              />
              <p className="home-paragraph-heading green">
                {recoveredCard.value}
              </p>
            </div>
          </li>
          <li
            className={`StateCard-background ${deceasedCard.name}`}
            tabIndex="-1"
            key={deceasedCard.name}
            value={deceasedCard.name}
            onClick={() => this.cardClick(deceasedCard.name)}
          >
            <div data-testid="stateSpecificDeceasedCasesContainer">
              <p className="home-paragraph-heading">Deceased</p>
              <img
                src={deceasedCard.logo}
                alt="state specific deceased cases pic"
                className="home-cards-logo"
              />
              <p className="home-paragraph-heading">{deceasedCard.value}</p>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default StateCards
