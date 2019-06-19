websiteApp = {};

websiteApp.focusedPiece = function() {
    if ($(`.hangmanItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4,
        .focusedPieceText h5, 
        .focusedPieceText p, 
        .liveButtons,
        .laptopScreen img`).addClass(`invisible`);
        $(`.reportCardDay`).removeClass(`invisible`);
        $(`.item`).removeClass(`itemFocus`);
        $(this).addClass(`itemFocus`);
        $(`h4.reportCardDay, p.reportCardDay`).addClass(`visible`);
        $(`button.reportCardDay`).addClass(`visibleButton`);
        // $(`.reportCardDay`).toggleClass(`invisible`);

    }));

    if ($(`.pokemonItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4,
        .focusedPieceText h5, 
        .focusedPieceText p,
        .liveButtons, 
        .laptopScreen img`).addClass(`invisible`);
        // $(`.showSkills`).addClass(`.invisible`);
        $(`.pokemonGame`).removeClass(`invisible`);
        $(`.item`).removeClass(`itemFocus`);
        $(this).addClass(`itemFocus`);
        $(`h4.pokemonGame, p.reportCardDay`).addClass(`visible`);
        $(`button.pokemonGame`).addClass(`visibleButton`);
    }));

    if ($(`.packinItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4,
        .focusedPieceText h5, 
        .focusedPieceText p,
        .liveButtons, 
        .laptopScreen img`).addClass(`invisible`);
        $(`.letsGetPackin`).removeClass(`invisible`);
        $(`.item`).removeClass(`itemFocus`);
        $(this).addClass(`itemFocus`);
        $(`h4.letsGetPackin, p.letsGetPackin`).addClass(`visible`);
        $(`button.letsGetPackin`).addClass(`visibleButton`);
    }));

    if ($(`.cocktailsItem`).on(`click`, function (e) {
        $(`.focusedPieceText h4,
        .focusedPieceText h5, 
        .focusedPieceText p,
        .liveButtons, 
        .laptopScreen img`).addClass(`invisible`);
        $(`.item`).removeClass(`itemFocus`);
        $(this).addClass(`itemFocus`);
        $(`.lastMinuteCocktails`).removeClass(`invisible`);
        $(`h4.lastMinuteCocktails, p.letsGetPackin`).addClass(`visible`);
        $(`button.lastMinuteCocktails`).addClass(`visibleButton`);
    }));
}

websiteApp.init = function() {
    websiteApp.focusedPiece();
}

// DOCUMENT READY

$(function () {
    websiteApp.init();
})