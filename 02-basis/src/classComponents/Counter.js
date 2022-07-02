import { Component } from 'react';

class CCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCounter,
    }
    this.increase.bind(this)
  }

  componentDidMount() {
    console.log('me ejecute')
    // cargar elementos
    // suscribirnos a eventos
    // recibir props actualizadas
  }

  componentWillUnmount() {
    // limpiar memoria
    // desuscribirme de eventos
  }

  increase() {
    this.setState({ count: this.state.count + 1 })
  }

  decrease() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.increase()}>Incrementar</button>
        <button onClick={() => this.decrease()}>Decrementar</button>
      </div>
    )
  }
}

export default CCounter;