import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ButtonComponent from '../components/butontest';
const onClick = vi.fn()


describe('Butoons', () => {
  /*  it('button displays text when clicked', () => {
        render(<ButtonComponent  onClick={onClick} />);
        
       const button=screen.getByRole('button')

       fireEvent.click(button)
       expect(onClick).toHaveBeenCalledTimes(1);  
})
       */

it('calls onClick when the button is clicked', () => {
    // Render the component with the mock onClick handler
    render(<ButtonComponent onClick={onClick} />);

    // Find the button by its role
    const button = screen.getByRole('button');

    // Simulate a click event on the button
    fireEvent.click(button);

    // Assert that the onClick handler was called once
    expect(onClick).toHaveBeenCalledTimes(1);
  });

})
