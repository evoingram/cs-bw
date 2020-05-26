# Computer Science:  Build Week

## Conway's Game of Life

### Next Steps

- [ ] day 2 blog post
- [ ] make grid 25x25 AND adjustable to 4-5 different sizes
  - [ ] each cell clickable while NOT running
  - [ ] not clickable while running
- [ ] STATE:  alive = #4E8A63 (green)   |   dead = #2958AA (blue)
- [ ] set up buffer for double buffering requirement
- [ ] set up state for individual cells (alive, toggleable,green | dead, non-toggleable, blue)
- [ ] add functionality to toggle-grid, play, pause, next, clear buttons on GButtons.js
- [ ] add functionality to preset 1 through 4 buttons on PSButtons.js
- [ ] day 3 blog post
- [ ] day 4 blog post
- [ ] day 5 blog post
- [ ] maybe add growing vine as border around outside if time allows

### Specs & Requirements

The main entry point of your application should house the visualization of this cellular automaton. Include necessary components, such as:

- [X] Text to display current generation # being displayed
- [X] Grid to display cells.
- [ ] Cell objects or components that, at a minimum, should have:
  - [ ] Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or simulation is running and rules of life caused cell to change state
  - [ ] An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.
    - [ ] Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval
  - [ ] Properties
    - [ ] current state: (alive, dead), (black, white)
    - [ ] Clickable/Tappable:
      - [ ] can be clicked to allow user to setup initial cell configuration
      - [ ] should NOT be clickable while simulation is running
  - [X] Button(s) that start & stop the animation
  - [X] Button to clear the grid
  - [ ] Write an algorithm that:
    - [ ] For each cell in the current generation's grid:
      - [ ] Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
      - [ ] Apply rules of life to determine if this cell will change states
        - [ ] When main loop completes:
          - [ ] Swap current and next grids
          - [ ] Repeat until simulation stopped  
  - [ ] Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability
  - [ ] Edge of the grid wraps around to the far side
  - [ ] Uses double buffering to update grid with next generation.
  - [X] On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life

#### Features

- [ ] Create a few sample cell configurations that users can load and run
- [ ] Add an option that creates a random cell configuration that users can run
- [ ] Add additional cell properties, like color or size, and incorporate them into your visualization
- [ ] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
- [X] Allow users to change the dimension of the grid being displayed
- [X] On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life
- [ ] Deploy your app using a tool like GitHub Pages or Heroku
- [ ] Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here. (possibly run build and then have server always point to index.html, https://www.aquoco.co/erica-ingram/CGOL/index.html)

#### Other Stretch Features

- [ ] Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.
- [ ] Explore alternate algorithms for finding the nth generation, such as Hashlife

### Rubric

- [ ] TWO:  Display includes a grid of cells, at least 25x25, that can be toggled to be alive or dead
- [ ] TWO:  Algorithm to generate new generations of cells correctly implemented
- [ ] TWO:  At least 3 features from Custom Features section successfully implemented

- Colors:  #2958AA (blue), #4E8A63 (green), #642B73 (purple), #C6426E (pink)
