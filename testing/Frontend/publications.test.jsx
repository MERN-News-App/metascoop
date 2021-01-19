//Testing 'Publications' component located at client/src/components/publications.jsx

import React from "react";
import { render, act, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Publications from "./publications";

describe("Publications", () => {
    const mockStore = configureStore();
    const state = { publications: 10}

    beforeEach(async () => {
      const store = mockStore(state);
      await act(async () => {
        render(<Provider store={store}><Publications /></Provider>);
      })
    })

    it('displays the first publication', async () => {
      expect(await screen.findByText('soompi')).toBeTruthy();
    })
 });
