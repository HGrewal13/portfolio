websiteApp = {};

websiteApp.focusedPiece = function() {
    if ($(`.hangmanItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4, .focusedPieceText p, .laptopScreen img`).addClass(`invisible`);
        $(`.reportCardDay`).removeClass(`invisible`);
        $(`.reportCardDay`).addClass(`visible`);
    }));

    if ($(`.pokemonItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4, .focusedPieceText p, .laptopScreen img`).addClass(`invisible`);
        $(`.pokemonGame`).removeClass(`invisible`);
        $(`.pokemonGame`).addClass(`visible`);
    }));

    if ($(`.packinItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4, .focusedPieceText p, .laptopScreen img`).addClass(`invisible`);
        $(`.letsGetPackin`).removeClass(`invisible`);
        $(`.letsGetPackin`).addClass(`visible`);
    }));

    if ($(`.cocktailsItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4, .focusedPieceText p, .laptopScreen img`).addClass(`invisible`);
        $(`.lastMinuteCocktails`).removeClass(`invisible`);
        $(`.lastMinuteCocktails`).addClass(`visible`);
    }));
}

websiteApp.init = function() {
    websiteApp.focusedPiece();
}

// DOCUMENT READY

$(function () {
    websiteApp.init();
})