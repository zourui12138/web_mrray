<template>
    <div class="wave" ref="wave"></div>
</template>

<script>
    import {
        PerspectiveCamera,
        Scene,
        SpriteMaterial,
        Sprite,
        WebGLRenderer,
        TextureLoader
    } from 'three'

    export default {
        name: "wave",
        mounted() {
            let camera,// 相机
                scene,// 场景
                renderer,// 渲染对象
                SEPARATION = 90,// 间距
                AMOUNTX = 60,// X方向的数量
                AMOUNTY = 60,// Y方向的数量
                particle,// 精灵对象
                particles = [],// 精灵对象的集合
                count = 0;
            let onWindowResize = () => {
                camera.aspect = window.innerWidth / 400;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, 400 );
            };
            let init = () => {
                // 创建相机
                camera = new PerspectiveCamera( 75, window.innerWidth / 400, 1, 10000 );
                camera.position.z = 2500;
                camera.position.y = 200;
                camera.position.x = -500;
                // 创建场景
                scene = new Scene();
                // 创建纹理
                let textureLoader = new TextureLoader();
                let map = textureLoader.load('./static/img/ball.png');
                // 创建精灵材质
                let material = new SpriteMaterial();
                // 创建精灵元素
                let i = 0;
                for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
                    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                        particle = particles[ i ++ ] = new Sprite( material );
                        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                        scene.add( particle );
                    }
                }
                // 创建渲染对象
                renderer = new WebGLRenderer({ alpha: true });
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, 400 );
                // 将渲染对象中的canvas挂载到目标节点上
                this.$refs.wave.appendChild( renderer.domElement );
                // 绑定屏幕变化事件
                window.addEventListener( 'resize', onWindowResize, false );
            };
            let animate = () => {
                requestAnimationFrame( animate );
                render();
            };
            let render = () => {
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
            };
            init();
            animate();
        }
    }
</script>

<style lang="scss" scoped>
    .wave{height: 400px;}
</style>
