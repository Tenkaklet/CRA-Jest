import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe(Counter, () => {
  it('Initial Count is correct', () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it('Count should increment by 1 if the increment button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: 'Add One'});
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    fireEvent.click(incrementBtn);
    expect(countValue2).toEqual(1);
  });

  it('Count should decrement when clicked on Minus One button', () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
    const minusBtn = getByRole('button', {name: 'Minus One'});
    const countValue1 = Number(getByTestId('count').textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(minusBtn);
    const countValue2 = Number(getByTestId('count').textContent);
    fireEvent.click(minusBtn);
    expect(countValue2).toEqual(-1);
  });

  it('Resets the counter', () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={1337} />);
    const restartBtn = getByRole('button', {name: 'Reset'});
    expect(Number(getByTestId('count').textContent)).toEqual(1337);
    fireEvent.click(restartBtn);
    expect(Number(getByTestId('count').textContent)).toEqual(0);
  });



});