import { render } from '@testing-library/react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';


export default class MediaNotas extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          nota1: '',
          nota2: '',
          nota3: '',
          media: null,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.calcularMedia = this.calcularMedia.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value,
        });
      }
    
      calcularMedia(event) {
        event.preventDefault();
        const { nota1, nota2, nota3 } = this.state;
        const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        this.setState({
          media: media.toFixed(2),
        });
      }
    
   
    render() {
        const { nota1, nota2, nota3, media } = this.state;
        return(
            <div>
            <form onSubmit={this.calcularMedia}>
              <label>
                Nota 1:
                <input type="number" name="nota1" value={nota1} onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Nota 2:
                <input type="number" name="nota2" value={nota2} onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Nota 3:
                <input type="number" name="nota3" value={nota3} onChange={this.handleInputChange} />
              </label>
              <br />
              <button type="submit">Calcular média</button>
            </form>
            {media && (
              <p>A média das notas é: {media}</p>
            )}
          </div>
    
        )
    }
}
