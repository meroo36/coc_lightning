import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";

export default (boardSize, squareSize, editState) => {
    var draw = SVG()
        .addTo("#main-board")
        .attr({ id: "main-board" })
        .size(boardSize, boardSize);
    var newDraw = draw.nested();
    var lightning = draw.nested().front();

    draw.on("click", (e) => {
        console.log(e);
        console.log(editState);
        var audio = new Audio('/lightning.mp3');
        audio.play();
        var lightningPoly = lightning
            .circle(200)
            .fill({ color: "aqua" })
            .attr({ class: "ease" })
            .move(e.layerX - 100, e.layerY - 100);
        setTimeout(() => {
            lightningPoly.remove();
        }, 2000);
    });

    for (let i = 0; i < boardSize / squareSize; i++) {
        for (let j = 0; j < boardSize / squareSize; j++) {
            newDraw
                .rect(squareSize, squareSize)
                .stroke({ color: "#f06", opacity: 0.3, width: 2 })
                .fill({ color: "black" })
                .attr({ x: squareSize * i, y: squareSize * j });
        }
    }

    //init buildings
    var groupedDraw = draw
        .group()
        .draggable()
        .attr({ class: "air-defence" })
        .on("dragend", (e) => {
            var cx = e.detail.box.cx;
            var cy = e.detail.box.cy;
            console.log(cx, cy);
            e.detail.handler.move(Math.ceil(cx / 50) * 50 - 100, Math.ceil(cy / 50) * 50 - 100);
        });
    groupedDraw
        .rect(150, 150)
        .fill({ color: "orange", opacity: 0.7 })
        .stroke({ color: "blue", opacity: 1, width: 2 });
    groupedDraw
        .text("AIR DEFENCE")
        .font({ size: 20, family: "Verdana" })
        .center(75, 75);
    var groupedDraw2 = draw
        .group()
        .attr({ class: "air-defence" })
        .draggable()
        .on("dragend", (e) => {
            var cx = e.detail.box.cx;
            var cy = e.detail.box.cy;
            console.log(cx, cy);
            e.detail.handler.move(Math.ceil(cx / 50) * 50 - 100, Math.ceil(cy / 50) * 50 - 100);
        });
    groupedDraw2
        .rect(150, 150)
        .attr({})
        .move(150, 0)
        .stroke({ color: "blue", opacity: 1, width: 2 })
        .fill({ color: "orange", opacity: 0.7 })
        .fill({ color: "orange", opacity: 0.7 })
        .stroke({ color: "blue", opacity: 1, width: 2 });
    groupedDraw2
        .text("AIR DEFENCE")
        .font({ size: 20, family: "Verdana" })
        .center(225, 75);
};
