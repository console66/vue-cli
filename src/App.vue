<template>
    <div id="app">
        <transition :name='transitionName'>
            <keep-alive :include="keepAlive.value">
                <router-view  class="child-view" />
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    import keepAlive from './router/keepAlive.js';
    import {storage} from "@/assets/js/common"
    export default {
        data() {
            return {
                count: 0,
                lastTime: 0,
                transitionName: 'fold-right',
                keepAlive: keepAlive
            }
        },
        methods: {

        },
        watch:{
            $route(to, from) {
                let goTo = this.$router.goTo;
                let noAnimatePages = {
                    // 从下列页面跳转到其它页面都没有转场动画 eg:['/initial']
                    from: [],
                    // 跳转到下列页面都没有转场动画 eg:['/initial']
                    to: [],
                    // 同时满足to和from时没有转场动画 eg:[{to:'/message/detail', from:'/'}]
                    and: []
                };
                if (noAnimatePages.to.indexOf(to.path) > -1 || noAnimatePages.from.indexOf(from.path) > -1) {
                    this.noAnimate = true;
                } else if (noAnimatePages.and.find(item => item.to === to.path && item.from === from.path)) {
                    this.noAnimate = true;
                } else {
                    this.noAnimate = this.$router.noAnimate || false;
                }
                if (!this.noAnimate) {
                    // 判断页面回退还是前进
                    if (goTo) {
                        this.transitionName = 'fold-right';
                    } else {
                        this.transitionName = 'fold-left';
                    }
                } else {
                    this.transitionName = 'no-animate';
                }
                window.scrollTo(0, 0);
                this.$router.goTo = false;
                this.$router.noAnimate = false;
            }
        }
    }
</script>

<style lang="less">
    @import "./assets/css/reset.css";
    .child-view {
        position: absolute;
        width: 100%;
        min-height: 100%;
    }
    .fold-left-enter-active {
        animation-name: fold-left-in;
        animation-duration: .3s;
    }
    .fold-left-leave-active {
        animation-name: fold-left-out;
        animation-duration: .3s;
    }
    @keyframes fold-left-in {
        0% {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes fold-left-out {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);

        }
    }
    .fold-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .3s;
    }
    .fold-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .3s;
    }
    @keyframes fold-right-in{
        0% {
            width: 100%;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            width: 100%;
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes fold-right-out  {
        0% {
            width: 100%;
            transform: translate3d(0, 0, 0);
        }
        100% {
            width: 100%;
            transform: translate3d(100%, 0, 0);

        }
    }
</style>
