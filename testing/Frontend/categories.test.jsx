//Testing 'Categories" component located at 'client/components/categories.jsx'

import React from "react";
import { render, act, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Categories from "./categories";

describe("Categories", () => {
    const mockStore = configureStore();
    const state = { categories: 10}

    beforeEach(async () => {
      const store = mockStore(state);
      await act(async () => {
        render(<Provider store={store}><Categories /></Provider>);
      })
    })

    it('displays the first category', async () => {
      expect(await screen.findByText('REGIONAL')).toBeTruthy();
    })
  });
