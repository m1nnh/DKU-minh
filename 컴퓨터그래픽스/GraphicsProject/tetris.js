
var canvas;
var gl;
var program;

// Three Vertices        
var gridVertices = [];

// Outer grid padding in percentage
var outerGridPadding = 0;
var padding = outerGridPadding * 2;

var numberOfCols = 10;
var numberOfRows = 20;

// Draw grid rows
var rowGridSpacing = (2 - padding * 2) / numberOfRows;
var colGridSpacing = (2 - padding * 2) / numberOfCols;

var lowerTetrisPieceFlag = true;
var gameTerminatedFlag = false;

// Draw grid
for (var i = 0; i <= numberOfRows; i++) {
    gridVertices.push(vec2(-1 + padding, -1 + padding + i*rowGridSpacing));
    gridVertices.push(vec2(1 - padding, -1 + padding + i*rowGridSpacing));
}

for (var i = 0; i <= numberOfCols; i++) {
    gridVertices.push(vec2(-1+padding + i*colGridSpacing, 1-padding));
    gridVertices.push(vec2(-1+padding + i*colGridSpacing, -1+padding));
}

var gameInterval;

var defaultGameSpeed = 600;
var currentGameSpeed = defaultGameSpeed;
var increasedGameSpeed = 100;
var changeGameSpeed = 100;
var increaseGameSpeedFlag = false;

var allowChangeSpeed = true;

// Takes speed of game in parameter
function setGameSpeed(speed) {
        clearInterval(gameInterval);
        console.log("Setting interval to " + speed);
        gameInterval = window.setInterval(lowerTetrisPiece, speed);
}

// Set up timer
setGameSpeed(defaultGameSpeed);

function lowerTetrisPiece() {
    var desiredSpaceOccupied = false;
    for (var coordinates in currentBlock.location) {
        var xCoord = currentBlock.location[coordinates][0];
        var yCoord = currentBlock.location[coordinates][1];

        if (gameBoardState[xCoord][yCoord-1].occupied === true) {
            for (var coordinates in currentBlock.location) {
                var xCoord = currentBlock.location[coordinates][0];
                var yCoord = currentBlock.location[coordinates][1];

                if (gameBoardState[xCoord][yCoord]!== undefined) {
                    gameBoardState[xCoord][yCoord].occupied = true;
                    gameBoardState[xCoord][yCoord].color = currentBlock.color;
                }
            }

            desiredSpaceOccupied = true;
            newBlockRequired = true;
            break;
        }
    }
    if (!desiredSpaceOccupied === true) {
        currentBlock.centerOfRotation[1]--;
    }
}


window.addEventListener("keyup", getUpKey, false);

function getUpKey (key) {
    if (key.key === "ArrowDown" && increaseGameSpeedFlag) {
        setGameSpeed(currentGameSpeed);
        increaseGameSpeedFlag = false;
    }
}

window.addEventListener("keydown", getDownKey, false);

function getDownKey (key) {
    if (key.key === "q") {
        restartGame();
        gameTerminatedFlag = true;
        newBlockRequired = false;
    }

    if (key.key === "r") {
        gameTerminatedFlag = false;
        restartGame();
    }
    if (key.key === "ArrowDown" && !increaseGameSpeedFlag) {
        increaseGameSpeedFlag = true;
        lowerTetrisPiece();
        setGameSpeed(increasedGameSpeed);
    }

    if (key.key === "j") {
        if (currentGameSpeed > 100) {
            currentGameSpeed -= changeGameSpeed;
            if (allowChangeSpeed) {
                setGameSpeed(currentGameSpeed);   
            }
        }
    }

    if (key.key === "k") {
        if (currentGameSpeed < 1200) {
            currentGameSpeed += changeGameSpeed;
            if (allowChangeSpeed) {
                setGameSpeed(currentGameSpeed);
            }
        }
    }

    if (key.key === "ArrowUp") {
        tetriminoPieces.forEach(function(piece) {
            if (piece.type === currentBlock.type) {
                var newStyleNum = (currentBlock.styleNum + 1) % piece.styles.length;
                if (!checkPieceCollision(selectedBlock.styles[newStyleNum].orientation)) {
                    currentBlock.orientation = selectedBlock.styles[newStyleNum].orientation;
                    currentBlock.styleNum = newStyleNum;
                }
            }
        });
    }
    if (key.key === "ArrowLeft") {
        var xCoord = currentBlock.centerOfRotation[0];
        var yCoord = currentBlock.centerOfRotation[1];

        if (!checkWallCollision(currentBlock.orientation, "ArrowLeft")) {
            currentBlock.centerOfRotation[0]--;
        }

    }
    if (key.key === "ArrowRight") {
        var xCoord = currentBlock.centerOfRotation[0];
        var yCoord = currentBlock.centerOfRotation[1];

        if (!checkWallCollision(currentBlock.orientation, "ArrowRight")) {
            currentBlock.centerOfRotation[0]++;
        }
    }
}

function checkPieceCollision(blockOrientations) {
    var currentXCoord = currentBlock.centerOfRotation[0];
    var currentYCoord = currentBlock.centerOfRotation[1];

    for (var coordinates in blockOrientations) {
        var testXCoordinate = blockOrientations[coordinates][0] + currentXCoord;
        var testYCoordinate = blockOrientations[coordinates][1] + currentYCoord;

        if (gameBoardState[testXCoordinate] === undefined) {
            return true;
        }

        if (gameBoardState[testXCoordinate][testYCoordinate] === undefined) {
            return true;
        }

        if (gameBoardState[testXCoordinate][testYCoordinate].occupied === true) {
            return true;
        } 
    }
    return false;
}

var newBlockRequired = true;
var gameBoardState = [];

for (var i = 0; i < numberOfCols; i++) {
    var tempArray = [];
    for (var j = 0; j < numberOfRows; j++) {
        tempArray.push({
            occupied: false,
            color: vec4(Math.random(), Math.random(), Math.random(), 1.0),
            location: [i,j],
            cornerCoordinates: [
                convertCornerCoords(i,j),
                convertCornerCoords(i, j+1),
                convertCornerCoords(i+1, j+1),
                convertCornerCoords(i,j),
                convertCornerCoords(i+1, j+1),
                convertCornerCoords(i+1, j)
            ]
        });
    }
    gameBoardState.push(tempArray);
}

// ...................... //
// Tetrimino Orientations //
// ...................... //

var tetriminoPieces = [
    {
        type: "oPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(-1, 0),
                    vec2(0, 0),
                    vec2(-1, -1),
                    vec2(0, -1)
                ]
            }
        ],
        color: vec4(1.0, 1.0, 0.0, 1.0)
    },
    {
        type: "iPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(1, 0),
                    vec2(-1, 0),
                    vec2(-2, 0)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, 1),
                    vec2(0, -1),
                    vec2(0, -2)
                ]
            }
        ],
        color: vec4(0.0, 1.0, 1.0, 1.0)
    },
    {
        type: "sPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(1, 0),
                    vec2(0, -1),
                    vec2(-1, -1)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, 1),
                    vec2(1, 0),
                    vec2(1, -1)
                ]
            }
        ],
        color: vec4(0.0, 1.0, 0.0, 1.0)
    },
    {
        type: "zPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(0, -1),
                    vec2(1, -1)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(1, 0),
                    vec2(1, 1)
                ]
            }
        ],
        color: vec4(1.0, 0.0, 0.0, 1.0)
    },
    {
        type: "lPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(1, 0),
                    vec2(-1, -1)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(1, -1)
                ]
            },
            {
                type: 3,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(1, 0),
                    vec2(1, 1)
                ]
            },
            {
                type: 4,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(-1, 1)
                ]
            }
        ],
        color: vec4(1.0, 0.631, 0.0, 1.0)
    },
    {
        type: "jPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(1, 0),
                    vec2(1, -1)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(1, 1)
                ]
            },
            {
                type: 3,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(-1, 1),
                    vec2(1, 0)
                ]
            },
            {
                type: 4,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(-1, -1)
                ]
            }
        ],
        color: vec4(0.169, 0.0, 1.0, 1.0)
    },
    {
        type: "tPiece",
        styles: [
            {
                type: 1,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(1, 0),
                    vec2(0, -1)
                ]
            },
            {
                type: 2,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(1, 0)
                ]
            },
            {
                type: 3,
                orientation: [
                    vec2(0, 0),
                    vec2(-1, 0),
                    vec2(1, 0),
                    vec2(0, 1)
                ]
            },
            {
                type: 4,
                orientation: [
                    vec2(0, 0),
                    vec2(0, -1),
                    vec2(0, 1),
                    vec2(-1, 0)
                ]
            }
        ],
        color: vec4(0.737, 0.0, 1.0, 1.0)
    },
];

// Initialize 
var currentBlock = {};
var selectedBlock = {};

function selectCurrentBlock() {
    if (newBlockRequired) {
        // Display it in random location
        var randInitialX = 2 + Math.floor(Math.random() * (numberOfCols - 3));
        var initialY = 19;
        var initialLocation = [randInitialX, initialY];

        // Randomly select piece
        var randPieceInt = Math.floor(Math.random() * tetriminoPieces.length);
        selectedBlock = tetriminoPieces[randPieceInt];

        var randomStyleInt = Math.floor(Math.random() * selectedBlock.styles.length);

        currentBlock.orientation = selectedBlock.styles[randomStyleInt].orientation;
        currentBlock.styleNum = randomStyleInt;

        for (var i = 0; i < currentBlock.orientation.length; i++) {
            if (currentBlock.orientation[i][1] >= 1) {
                initialLocation = [randInitialX, initialY--];
                break;
            }
        }

        currentBlock.centerOfRotation = initialLocation;


        var moveUpFlag = true;
        while (moveUpFlag) {
            var counter = 0;
            for (var blockSpace in currentBlock.orientation) {
                var testXCoord = currentBlock.centerOfRotation[0] + currentBlock.orientation[blockSpace][0];
                var testYCoord = currentBlock.centerOfRotation[1] + currentBlock.orientation[blockSpace][1];

                if (gameBoardState[testXCoord][testYCoord] !== undefined) {
                    if (gameBoardState[testXCoord][testYCoord].occupied === true) {
                        initialLocation = [randInitialX, initialY++]
                    } else {
                        moveUpFlag = false;
                        break;
                    }
                } else {
                    counter++;
                }
            }
            if (counter >= currentBlock.orientation.length) {
                moveUpFlag = false;
            }
        }


        currentBlock.type = selectedBlock.type;
        currentBlock.color = selectedBlock.color;
        currentBlock.location = [];
        currentBlock.cornerCoordinates = [];

        checkStackCollision();

        newBlockRequired = false;
    }
}

function convertCornerCoords(x, y) {
    var xCoord = (x/numberOfCols * 1) + ((numberOfCols - x)/(numberOfCols) * -1);
    var yCoord = (y/numberOfRows * 1) + ((numberOfRows - y)/(numberOfRows) * -1);
    return vec2(xCoord, yCoord);
}

function drawCurrentBlock() {
    // Reset current block location and corner coordinates
    currentBlock.location = [];
    currentBlock.cornerCoordinates = [];

    // Populate current block grid coordinates
    for (var blockSpace in currentBlock.orientation) {
        currentBlock.location.push(
            [currentBlock.centerOfRotation[0] + currentBlock.orientation[blockSpace][0], 
            currentBlock.centerOfRotation[1] + currentBlock.orientation[blockSpace][1]]
        );
    }

    for (var block in currentBlock.location) {
        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0], currentBlock.location[block][1]));
        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0], currentBlock.location[block][1]+1));
        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0]+1, currentBlock.location[block][1]+1));

        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0], currentBlock.location[block][1]));
        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0]+1, currentBlock.location[block][1]+1));
        currentBlock.cornerCoordinates.push(convertCornerCoords(currentBlock.location[block][0]+1, currentBlock.location[block][1]));

    }

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(currentBlock.cornerCoordinates), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(currentBlock.color), gl.STATIC_DRAW);
    
    var colorUniformLocation = gl.getUniformLocation(program, "uColor");
    gl.uniform4f(colorUniformLocation, currentBlock.color[0], currentBlock.color[1], currentBlock.color[2], currentBlock.color[3]);

    gl.drawArrays(gl.TRIANGLES, 0, currentBlock.cornerCoordinates.length);
}

window.onload = function init() {

    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    // Sets up viewport
    gl.viewport( 0, 0, canvas.width, canvas.height );
    // Determines the background used when clearing color buffers
    gl.clearColor( 0, 0, 0, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(gridVertices), gl.STATIC_DRAW );    
    
    // // Associate our shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    
    render();
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    checkGameOver();
    if (!gameTerminatedFlag) {
        selectCurrentBlock();

        checkStackCollision();

        drawCurrentBlock();
        checkLineClears();
    }


    drawGameBoard();

    drawGridLines();
    window.requestAnimFrame(render);
}

function restartGame() {
    currentGameSpeed = defaultGameSpeed;
    setGameSpeed(defaultGameSpeed);
    increaseGameSpeedFlag = false;

    newBlockRequired = true;
    gameBoardState = [];
    currentBlock = {};
    selectedBlock = {};

    for (var i = 0; i < numberOfCols; i++) {
        var tempArray = [];
        for (var j = 0; j < numberOfRows; j++) {
            tempArray.push({
                occupied: false,
                color: vec4(0, 0, 0, 1.0),
                location: [i,j],
                cornerCoordinates: [
                    convertCornerCoords(i,j),
                    convertCornerCoords(i, j+1),
                    convertCornerCoords(i+1, j+1),
                    convertCornerCoords(i,j),
                    convertCornerCoords(i+1, j+1),
                    convertCornerCoords(i+1, j)
                ]
            });
        }
        gameBoardState.push(tempArray);
    }
    if (!gameTerminatedFlag) {
        selectCurrentBlock();
    }
}

function checkGameOver() {
    for (var i = 0; i < numberOfCols; i++) {
        if (gameBoardState[i][numberOfRows-1].occupied === true) {
            alert("GameOver!");
            restartGame();
            break;
        }
    }
}

function checkWallCollision(blockOrientations, keyPress) {
    var currentXCoord = currentBlock.centerOfRotation[0];
    var currentYCoord = currentBlock.centerOfRotation[1];

    var keyPressXCoord = 0;
    var keyPressYCoord = 0;

    if (keyPress === "ArrowLeft") {
        keyPressXCoord = -1;
    }
    if (keyPress === "ArrowRight") {
        keyPressXCoord = 1;
    }

    for (var coordinates in blockOrientations) {
        var testXCoord = blockOrientations[coordinates][0] + currentXCoord + keyPressXCoord;
        var testYCoord = blockOrientations[coordinates][1] + currentYCoord + keyPressYCoord;
        if (testXCoord < 0 || testXCoord >= numberOfCols) {
            return true;
        }
        if (gameBoardState[testXCoord][testYCoord] !== undefined && gameBoardState[testXCoord][testYCoord].occupied === true) {
            return true;
        }
    }
    return false;
}

function checkStackCollision() {
    // Check for collisions on each individual square of the tetrimino
    for (var coordinates in currentBlock.location) {
        var xCoord = currentBlock.location[coordinates][0];
        var yCoord = currentBlock.location[coordinates][1];

        if (gameBoardState[xCoord][yCoord] !== undefined && gameBoardState[xCoord][yCoord].occupied === true) {
            for (var coordinates in currentBlock.location) {
                var xCoord = currentBlock.location[coordinates][0];
                var yCoord = currentBlock.location[coordinates][1] + 1;

                if (gameBoardState[xCoord][yCoord] !== undefined) {
                    gameBoardState[xCoord][yCoord].occupied = true;
                    gameBoardState[xCoord][yCoord].color = currentBlock.color;
                }
            }

            newBlockRequired = true;

            break;
        }

        // Check to see if tetrimino hits the floor
        if (yCoord <= 0) {
            // Update gameboard to include tetrimino piece
            for (var coordinates in currentBlock.location) {
                var xCoord = currentBlock.location[coordinates][0];
                var yCoord = currentBlock.location[coordinates][1];

                if (gameBoardState[xCoord][yCoord] !== undefined) {
                    gameBoardState[xCoord][yCoord].occupied = true;
                    gameBoardState[xCoord][yCoord].color = currentBlock.color;
                }
            }

            newBlockRequired = true;

            break;
        }
    }
}

function checkLineClears() {
    for (var i = 0; i < numberOfRows; i++) {
        var gridCounter = 0;
        for (var j = 0; j < numberOfCols; j++) {
            var gridSpot = gameBoardState[j][i];
            // console.log(gridSpot);
            if (gridSpot.occupied === true) {
                gridCounter++;
                // console.log(gridCounter);
            }

            if (gridCounter === numberOfCols) {
                console.log("Row Filled!");
                // Clear row
                for (var k = 0; k < numberOfCols; k++) {
                    // Move all other rows down
                    for (var startingRow = i; startingRow < numberOfRows-1; startingRow++) {
                        gameBoardState[k][startingRow].occupied = gameBoardState[k][startingRow+1].occupied;
                        gameBoardState[k][startingRow].color = gameBoardState[k][startingRow+1].color;
                    }
                }

            }
        }
    }
}
function drawGameBoard() {
    for (var i = 0; i < numberOfCols; i++) {
        for (var j = 0; j < numberOfRows; j++) {
            var gridSpot = gameBoardState[i][j];

            if (gridSpot.occupied === true) {
                var vBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, flatten(gridSpot.cornerCoordinates), gl.STATIC_DRAW );

                // Associate our shader variables with our data buffer
                var vPosition = gl.getAttribLocation( program, "vPosition" );
                gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
                gl.enableVertexAttribArray( vPosition );

                var cBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, flatten(gridSpot.color), gl.STATIC_DRAW);
                
                var colorUniformLocation = gl.getUniformLocation(program, "uColor");
                gl.uniform4f(colorUniformLocation, gridSpot.color[0], gridSpot.color[1], gridSpot.color[2], gridSpot.color[3]);

                gl.drawArrays(gl.TRIANGLES, 0, gridSpot.cornerCoordinates.length);
            }
        }
    }
}

function drawGridLines() {
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(gridVertices), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(currentBlock.color), gl.STATIC_DRAW);
    
    var colorUniformLocation = gl.getUniformLocation(program, "uColor");
    gl.uniform4f(colorUniformLocation, 0.827, 0.827, 0.827, 1);

    gl.drawArrays( gl.LINES, 0, gridVertices.length);
}
