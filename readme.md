# Computer Science:  Build Week

## Conway's Game of Life

### Things To Do

- [X] describe rules of game of life
- [ ] describe what are cellular automata
- [ ] describe how are celullar automata useful IRL
- [ ] correctly analyze "Turing Completeness" of Conway's Game of Life
- [ ] how-to guide or blog post to walk through what you did to implement your project
- [ ] set up UI for game
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ] 

### Specs & Requirements

The main entry point of your application should house the visualization of this cellular automaton. Include necessary components, such as:

- [ ] Grid to display cells.
- [ ] Cell objects or components that, at a minimum, should have:
    - [ ] Properties
        - [ ] current state: (alive, dead), (black, white)
        - [ ] Clickable/Tappable:
            - [ ] can be clicked to allow user to setup initial cell configuration
            - [ ] should NOT be clickable while simulation is running
    - [ ] Behaviors
        - [ ] Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or simulation is running and rules of life caused cell to change state
    - [ ] An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.
    - [ ] Text to display current generation # being displayed
        - [ ] Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval
    - [ ] Button(s) that start & stop the animation
    - [ ] Button to clear the grid
    - [ ] Write an algorithm that:
        - [ ] Implements the following basic steps:
            - [ ] For each cell in the current generation's grid:
                - [ ] Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
                - [ ] Apply rules of life to determine if this cell will change states
                - [ ] When main loop completes:
                    - [ ] Swap current and next grids
                    - [ ] Repeat until simulation stopped
    - [ ] Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability
    - [ ] Uses double buffering to update grid with next generation.
    - [ ] Does something well-documented with the edge of the grid. (e.g. wrap around to the far side--most fun!--or assumes all edge cells are permanently dead.)
    - [ ] On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life


    #### Features

    - [ ] Create a few sample cell configurations that users can load and run
    - [ ] Add an option that creates a random cell configuration that users can run
    - [ ] Add additional cell properties, like color or size, and incorporate them into your visualization
    - [ ] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
    - [ ] Allow users to change the dimension of the grid being displayed
    - [ ] On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life
    - [ ] Deploy your app using a tool like GitHub Pages or Heroku
    - [ ] Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here.

    #### Other Stretch Features

    - [ ] Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.
    - [ ] Explore alternate algorithms for finding the nth generation, such as Hashlife

### Rubric

- [ ] TWO:  Display includes a text area that shows the current generation of cells being displayed
- [ ] TWO:  Display includes a grid of cells, at least 25x25, that can be toggled to be alive or dead
- [ ] TWO:  Display includes working buttons that start / stop the animation and clear the grid
- [ ] TWO:  Algorithm to generate new generations of cells correctly implemented
- [ ] TWO:  At least 3 features from Custom Features section successfully implemented
- [ ] TWO:  Application includes a section outlining the rules to Conway's "Game of Life"
- [ ] THREE:  satisfies at least ONE of the stretch goals