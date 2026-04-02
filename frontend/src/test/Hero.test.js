import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// Test case for Hero component
describe('Hero Component', () => {
  test('renders Hero Image', () => {
    render(<Hero />);
    // Check if the main image is rendered
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/homeHero.png');
  });   


  test('renders signup button', () => {
    render(<Hero />);
    // Check if the main image is rendered
    const signupButton = screen.getByRole("button", { name: /Sign Up for free/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary');
  });   
});

