//Testing Latest-News page located at '/client/pages/latestPage.jsx' 

import React from "react";
import { render, act, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import LatestNews from "./latestPage.jsx";

xdescribe("Latest News", () => {
    const mockStore = configureStore();
    const state = { LatestNews: 10}

    beforeEach(async () => {
      const store = mockStore(state);
      await act(async () => {
        render(<Provider store={store}><LatestNews /></Provider>);
      })
    })

    it('displays the most recent api call', async () => {
      expect(await screen.findByText('')).toBeTruthy();
    })
 });
