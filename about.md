
# About This Project

- ## Conway's Game of Life

    - ### About Conway's Game of Life

        Conway's Game of Life was invented in 1970 by John H. Conway.  His initial goal was to "define an interesting and unpredictable cell automaton", according to Wikipedia(https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).  According to that same source, "He wanted some configurations to last for a long time before dying and other configurations to go on forever without allowing cycles.  It was a significant challenge and an open problem for years before experts on cellular automata managed to prove that, indeed, the Game of Life admitted of a configuration which was alive in the sense of satisfying Von Neumann's two general requirements. While the definitions before the Game of Life were proof-oriented, Conway's construction aimed at simplicity without a priori providing proof the automaton was alive."

        Early versions did not use computers, but rather graph paper, blackboards, and physical game boards such as for the game go.  It is a zero-player game and requires no input past your initial input prior to starting the game.  CGOL has three pattern types; still lifes, oscillators, and spaceships.  It has an infinite two-dimensional grid of square cells, each of which has a state of either being alive or dead.  Whether they are alive or dead is determined by the rules of the game (see "Rules").  Every cell interacts with each of its eight neighbors (up, down, left, right, and diagonal directions).  Each step in time is called a "generation" and the game grid updates with each generation.

        The initial pattern is called a seed, and the first generation is created by applying the rules to the seed's every cell simultaneously.  Births and deaths occur simultaneously.  Each generation is a "pure function" of the preceding one.

    - ### Why is it Useful

        It simulates a Turing machine.  It is Turing-complete.  It is an example of cellular automata, which are extremely useful for modeling complex non-linear systems in many branches of science such as chemistry, biology, physics, cosmology, engineering, meteorology, and computer science.  Daniel Dennett has used it to show evolution of things like consciousness and free will within the physical laws which govern the universe.  Early use of it on computers foreshadowed the popularity of computer-generated fractals.  Some people just look at it as a fun way to use otherwise wasted CPU cycles.  Current developments have emulated theoretical computer systems within its confines.

    - ### - Turing Completeness of Conway's Game of Life

        CGOL is Turing-complete, meaning it can simulate a universal constructor on any other Turing machine.  It is able to recognize or decide other data manipulation rulesets.  It is also used as a way to express the power of such a ruleset.  Virtually all programming languages today are Turing-complete.  As stated earlier, it can be used to simulate the computational aspects of any possible real-world computer.  It can compute every Turing-computable function. 

        "Turing-completeness" is shown by showing that it can be used to simulate any other Turing-complete system.  Example:  An imperative language is Turing-complete if it has, one, conditional branching or branch-if-zero instruction and, two, the ability to change an arbitrary amount of memory, a.k.a. maintain an arbitrary number of data items.

- ## Cellular Automata

    A cellular automaton is a discrete model studied in "automata theory", a regular grid of cells, each cell in one of a finite number of states.  The grid can be any finite number of dimensions.  Cellular automata are also known as cellular spaces, cellular structures, and iterative arrays.
