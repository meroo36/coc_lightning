<template>
    <div class="main-wrapper">
        <div class="coc-orange-knop" @click="toggleEdit">
            <div id="witteschijn">
                <i class="btn-icon fas fa-pen" v-if="editState"></i>
                <i class="btn-icon fas fa-bolt" v-if="!editState"></i>
            </div>
        </div>
        <div id="main-board"></div>
    </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";
import init from "../src/functions/init";

export default {
    name: "App",
    data() {
        return { draw: {}, squareSize: 50, boardSize: 600, editState: true };
    },
    components: {},
    methods: {
        toggleEdit: function() {
            this.editState = !this.editState;
            SVG("#main-board")
                .find(".air-defence")
                .forEach((e) => {
                    e.draggable(this.editState);
                });
        },
    },
    mounted() {
        init(this.boardSize, this.squareSize, this.editState);
    },
};
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: auto;
    background: rgb(44, 44, 44);
}
body {
    touch-action: manipulation;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.btn-icon {
    margin: 10px;
    font-size: 70px;
}
.main-wrapper {
    text-align: center;
}
#main-board {
    width: 600px;
    height: 600px;
    box-shadow: 0px 2px 20px rgb(0 0 0);
}
.coc-orange-knop {
    /* opacity: 0.6; */
    background: rgba(219, 74, 7, 1);
    border-radius: 7px;
    height: 100px;
    width: 100px;
    border: 1px solid white;
    border-width: 0.07em;
    margin: 10px;
    -webkit-box-shadow: 0px 2px 6px rgb(0 0 0);
    -moz-box-shadow: 0px 2px 6px rgba(0, 0, 0, 1);
    box-shadow: 0px 2px 6px rgb(0 0 0);
}
.coc-orange-knop:active {
    transform: scale(0.9);
}
#witteschijn {
    position: relative;
    background: rgba(241, 152, 68, 1);
    height: 50%; /*30px*/
    width: 96px;
    left: 2px;
    top: 2px;
    border-radius: 5px;
}
.ease {
    opacity: 0;
    animation: opacityAnim 2s;
}
@keyframes opacityAnim {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
