<template>
    <div class="wave" ref="wave"></div>
</template>

<script>
    import {
        PerspectiveCamera,
        Scene,
        SpriteMaterial,
        Sprite,
        WebGLRenderer
    } from 'three'

    export default {
        name: "wave",
        methods: {},
        mounted() {
            let SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
            let camera, scene, renderer;
            let particles, particle, count = 0;
            let mouseX = 0, mouseY = 0;
            let me = this;
            function init() {
                let container = me.$refs.wave;

                camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 1000;

                scene = new Scene();

                particles = [];

                let material = new SpriteMaterial( {color: 0xffffff} );
                let i = 0;
                for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
                    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                        particle = particles[ i ++ ] = new Sprite( material );
                        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                        scene.add( particle );
                    }
                }
                console.log(particle);
                renderer = new WebGLRenderer();
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );
            }
            function animate() {
                requestAnimationFrame( animate );
                render();
            }
            function render() {
                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;
                camera.lookAt( scene.position );
                let i = 0;
                for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
                    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                        particle = particles[ i++ ];
                        particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
                            ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
                            ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
                    }
                }
                renderer.render( scene, camera );
                count += 0.1;
            }
            init();
            animate();
        }
    }
</script>

<style lang="scss" scoped>

</style>
