

// 全局变量
let board = [];
let score = 0;
let hasConflicted = [];

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

$(document).ready(function() {
    prepareForMobile();
    newGame();
    score = 0;
    updateScore(score);
});

function prepareForMobile() {
    if (documentWidth > 500) {
        gridContainerWidth = 500;
        cellSpace = 20;
        cellSideLength = 100;
    }

    $("#main").css({
        width: gridContainerWidth - 2 * cellSpace,
        height: gridContainerWidth - 2 * cellSpace,
        padding: cellSpace,
        borderRadius: 0.01 * gridContainerWidth
    });

    $(".main-box").css({
        width: cellSideLength,
        height: cellSideLength,
        borderRadius: 0.01 * cellSideLength
    });
}

function newGame() {
    init();
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const gridCell = $(`#box-${i}-${j}`);
            gridCell.css({ top: getPosTop(i, j), left: getPosLeft(i, j) });
        }
    }

    for (let i = 0; i < 4; i++) {
        board[i] = [];
        hasConflicted[i] = [];
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
    updateBoardView();
    score = 0;
}

// 画
function updateBoardView() {
    $(".number-cell").remove();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $("#main").append(`<div class="number-cell" id="number-cell-${i}-${j}"></div>`);
            const theNumberCell = $(`#number-cell-${i}-${j}`);

            if (board[i][j] === 0) {
                theNumberCell.css({
                    width: 0,
                    height: 0,
                    top: getPosTop(i, j) + cellSideLength / 2,
                    left: getPosLeft(i, j) + cellSideLength / 2
                });
            } else {
                theNumberCell.css({
                    width: cellSideLength,
                    height: cellSideLength,
                    top: getPosTop(i, j),
                    left: getPosLeft(i, j),
                    backgroundColor: getNumberBackgroundColor(board[i][j]),
                    color: getNumberColor(board[i][j])
                });

                theNumberCell.text(getNumberText(board[i][j]));
            }
            hasConflicted[i][j] = false;
        }
        $(".number-cell").css({
            lineHeight: `${cellSideLength}px`,
            fontSize: `${0.3 * cellSideLength}px`
        });
    }
}


function generateOneNumber() {
    if (nospace(board)) return false;

    let randX, randY;
    let times = 0;

    do {
        randX = Math.floor(Math.random() * 4);
        randY = Math.floor(Math.random() * 4);
        times++;
    } while (times < 50 && board[randX][randY] !== 0);

    if (times === 50) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] === 0) {
                    randX = i;
                    randY = j;
                }
            }
        }
    }

    const randNumber = Math.random() < 0.5 ? 2 : 4;
    board[randX][randY] = randNumber;
    showNumberWithAnimation(randX, randY, randNumber);
    return true;
}

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
}, { passive: false });

// 滑动
document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].pageX;
    endY = event.changedTouches[0].pageY;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) < 0.3 * documentWidth && Math.abs(deltaY) < 0.3 * documentWidth)
        return;

    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        if (deltaX > 0 && moveRight() || deltaX < 0 && moveLeft()) {
            setTimeout(generateOneNumber, 210);
            setTimeout(isGameOver, 300);
        }
    } else {
        if (deltaY > 0 && moveDown() || deltaY < 0 && moveUp()) {
            setTimeout(generateOneNumber, 210);
            setTimeout(isGameOver, 300);
        }
    }
});

function isGameOver() {
    if (nospace(board) && nomove(board)) {
        gameover();
    }
}

function moveLeft() {
    if (!canMoveLeft(board)) return false;

    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            if (board[i][j] !== 0) {
                for (let k = 0; k < j; k++) {
                    if (board[i][k] === 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] === board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }

    setTimeout(updateBoardView, 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(board)) return false;

    for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
            if (board[i][j] !== 0) {
                for (let k = 3; k > j; k--) {
                    if (board[i][k] === 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[i][k] === board[i][j] && noBlockHorizontal(i, j, k, board) && !hasConflicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] *= 2;
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }

    setTimeout(updateBoardView, 200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board)) return false;

    for (let j = 0; j < 4; j++) {
        for (let i = 1; i < 4; i++) {
            if (board[i][j] !== 0) {
                for (let k = 0; k < i; k++) {
                    if (board[k][j] === 0 && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] === board[i][j] && noBlockVertical(j, k, i, board) && !hasConflicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] *= 2;
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }

    setTimeout(updateBoardView, 200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board)) return false;

    for (let j = 0; j < 4; j++) {
        for (let i = 2; i >= 0; i--) {
            if (board[i][j] !== 0) {
                for (let k = 3; k > i; k--) {
                    if (board[k][j] === 0 && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    } else if (board[k][j] === board[i][j] && noBlockVertical(j, i, k, board) && !hasConflicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] *= 2;
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }

    setTimeout(updateBoardView, 200);
    return true;
}

function gameover() {
    $(".over").show();
    $(document).click(() => $(".over").hide());
}

$("#bot").click(() => {
    score = 0;
    updateScore(score);
});
