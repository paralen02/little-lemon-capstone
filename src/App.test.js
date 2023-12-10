// src/App.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Booking from './components/Booking';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

test('Renders the App', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Reserve Table/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Booking component', () => {
  render(<BrowserRouter><Booking /></BrowserRouter>);
  const linkElement = screen.getByText(/Make your reservation/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm component', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const linkElement = screen.getByText(/Choose Date/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the ConfirmedBooking component', () => {
  render(<BrowserRouter><ConfirmedBooking /></BrowserRouter>);
  const linkElement = screen.getByText(/Your booking is confirmed/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Footer component', () => {
  render(<BrowserRouter><Footer /></BrowserRouter>);
  const linkElement = screen.getByText(/© 2022 Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Header component', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Main component', () => {
  render(<BrowserRouter><Main /></BrowserRouter>);
  const linkElement = screen.getByText(/Welcome to Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Nav component', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});