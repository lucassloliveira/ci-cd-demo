import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
  it('renderiza o nome recebido', () => {
    render(<Greeting name="Lucas" />)
    expect(screen.getByText('Olá, Lucas!')).toBeInTheDocument()
  })
})

