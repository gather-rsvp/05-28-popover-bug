# README

## This repo reproduces a small bug when opening a Tamagui popover on native

The small bug consists in flashing the popover out of place for split seconds before it finally settles in the desired position. Take a look at the short gifs showing it:

- Example native (bug): https://gyazo.com/462648892b4eb7db37c9c7c3dda03577

- Example desktop (no bug): https://gyazo.com/44ee02b91cab92d26f533ce2b628d009

To reproduce this install the repo and

1. run `yarn install` on your terminal
2. run `yarn native` on your terminal
3. press `S` for expo-go simpler setup
4. press `I` to open iOS simulator on mac
5. wait for the app to load and click on the "Open popover" button
6. see that the popover flashes on the right of its final position. Sometimes it even flashes at the top left corner of the screen before flashing to the right of the final position.
