import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import map from './assets/globe.png'
import './globe.css'
const ThreeComponent = () => {
   const canvasRef = useRef();

   useEffect(() => {


      // the size of viewport here the height and width of it even if we resize it should take up all the available space
      // const sizes={
      //     width : window.innerWidth/2,
      //     height : window.innerHeight

      // }
      const sizes = {
         width:680,
         height: 700,
      }
      console.log(sizes)


      // scene
      const scene = new THREE.Scene();
      const group = new THREE.Group();


      // create our sphere
      //SphereGeometry(radius,width segment,height segment)
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      const material = new THREE.MeshBasicMaterial({
         map: new THREE.TextureLoader().load(map),
         toneMapped: false
      })
      //mesh is geometry + material
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      group.add(mesh);



      function calPosFromLatLong(lat, long) {
         const radius = 1;
         var phi = (90 - lat) * (Math.PI / 180);
         var theta = (long + 180) * (Math.PI / 180);
         let x = -((radius) * Math.sin(phi) * Math.cos(theta));
         let z = ((radius) * Math.sin(phi) * Math.sin(theta));
         let y = ((radius) * Math.cos(phi));

         return {
            x, y, z
         }
      }

      // add pin
       const india_point = {
         lat: 23.473324,
         long: 77.947998
      }
      let india_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0x00ff00
         })
      )
      const india_cord = calPosFromLatLong(india_point.lat, india_point.long);
      india_mesh.position.set(india_cord.x, india_cord.y, india_cord.z);
      scene.add(india_mesh);


      const germany_point = {
         lat: 51.165691,
         long: 10.451526
      }
      let germany_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const germany_cord = calPosFromLatLong(germany_point.lat, germany_point.long);
      germany_mesh.position.set(germany_cord.x, germany_cord.y, germany_cord.z);
      scene.add(germany_mesh);

      getCurve(india_cord, germany_cord);

      const america_point = {
         lat: 37.09024,
         long: -95.712891
      }
      let america_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const america_cord = calPosFromLatLong(america_point.lat, america_point.long);
      america_mesh.position.set(america_cord.x, america_cord.y, america_cord.z);
      scene.add(america_mesh);
      getCurve(india_cord, america_cord);

      const canada_point = {
         lat: 56.130366,
         long: -106.346771
      }
      let canada_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const canada_cord = calPosFromLatLong(canada_point.lat, canada_point.long);
      canada_mesh.position.set(canada_cord.x, canada_cord.y, canada_cord.z);
      scene.add(canada_mesh);
      getCurve(india_cord, canada_cord);


      const uk_point = {
         lat: 54.237933,
         long: -2.36967
      }
      let uk_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const uk_cord = calPosFromLatLong(uk_point.lat, uk_point.long);
      uk_mesh.position.set(uk_cord.x, uk_cord.y, uk_cord.z);
      scene.add(uk_mesh);
      getCurve(india_cord, uk_cord)

      const australia_point = {
         lat: -25.274398,
         long: 133.775136
      }
      let australia_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const australia_coord = calPosFromLatLong(australia_point.lat, australia_point.long);
      australia_mesh.position.set(australia_coord.x, australia_coord.y, australia_coord.z);
      scene.add(australia_mesh);
      getCurve(india_cord, australia_coord)

      const sweden_point = {
         lat: 60.128161,
         long: 18.643501
      }
      let sweden_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const sweden_coord = calPosFromLatLong(sweden_point.lat, sweden_point.long);
      sweden_mesh.position.set(sweden_coord.x, sweden_coord.y, sweden_coord.z);
      scene.add(sweden_mesh);
      getCurve(india_cord, sweden_coord)

      const perth_point = {
         lat: -31.95224,
         long: 115.8614
      }
      let perth_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const perth_coord = calPosFromLatLong(perth_point.lat, perth_point.long);
      perth_mesh.position.set(perth_coord.x, perth_coord.y, perth_coord.z);
      scene.add(perth_mesh);
      getCurve(india_cord, perth_coord)

      const goldCoast_point = {
         lat: -28.00029,
         long: 153.43088
      }
      let goldCoast_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const goldCoast_coord = calPosFromLatLong(goldCoast_point.lat, goldCoast_point.long);
      goldCoast_mesh.position.set(goldCoast_coord.x, goldCoast_coord.y, goldCoast_coord.z);
      scene.add(goldCoast_mesh);
      getCurve(india_cord, goldCoast_coord);


      const sydney_point = {
         lat: -34.92866,
         long: 138.59863
      }
      let sydney_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const sydney_coord = calPosFromLatLong(sydney_point.lat, sydney_point.long);
      sydney_mesh.position.set(sydney_coord.x, sydney_coord.y, sydney_coord.z);
      scene.add(sydney_mesh);
      getCurve(india_cord, sydney_coord);


      const ethopia_point = {
         lat: 9.1492,
         long: 40.4989
      }
      let ethopia_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const ethopia_coord = calPosFromLatLong(ethopia_point.lat, ethopia_point.long);
      ethopia_mesh.position.set(ethopia_coord.x, ethopia_coord.y, ethopia_coord.z);
      scene.add(ethopia_mesh);
      getCurve(india_cord, ethopia_coord);

      const nigeria_point = {
         lat: 9.081999,
         long: 8.675277
      }
      let nigeria_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const nigeria_coord = calPosFromLatLong(nigeria_point.lat, nigeria_point.long);
      nigeria_mesh.position.set(nigeria_coord.x, nigeria_coord.y, nigeria_coord.z);
      scene.add(nigeria_mesh);
      getCurve(india_cord, nigeria_coord);

      const southAfrica_point = {
         lat: -30.559482,
         long: 22.937506
      }
      let southAfrica_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const southAfrica_coord = calPosFromLatLong(southAfrica_point.lat, southAfrica_point.long);
      southAfrica_mesh.position.set(southAfrica_coord.x, southAfrica_coord.y, southAfrica_coord.z);
      scene.add(southAfrica_mesh);
      getCurve(india_cord, southAfrica_coord);

      const zimbabwe_point = {
         lat: -19.015438,
         long: 29.154857
      }
      let zimbabwe_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const zimbabwe_coord = calPosFromLatLong(zimbabwe_point.lat, zimbabwe_point.long);
      zimbabwe_mesh.position.set(zimbabwe_coord.x, zimbabwe_coord.y, zimbabwe_coord.z);
      scene.add(zimbabwe_mesh);
      getCurve(india_cord, zimbabwe_coord);

      const shanghai_point = {
         lat: 31.22222,
         long: 121.45806


      }
      let shanghai_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const shanghai_coord = calPosFromLatLong(shanghai_point.lat, shanghai_point.long);
      shanghai_mesh.position.set(shanghai_coord.x, shanghai_coord.y, shanghai_coord.z);
      scene.add(shanghai_mesh);
      getCurve(india_cord, shanghai_coord);

      const mangolia_point = {
         lat: 46.862496,
         long: 103.846656


      }
      let mangolia_mesh = new THREE.Mesh(
         new THREE.SphereGeometry(0.03, 20, 20),
         new THREE.MeshBasicMaterial({
            color: 0xff0000
         })
      )
      const mangolia_coord = calPosFromLatLong(mangolia_point.lat, mangolia_point.long);
      mangolia_mesh.position.set(mangolia_coord.x, mangolia_coord.y, mangolia_coord.z);
      scene.add(mangolia_mesh);
      getCurve(india_cord, mangolia_coord);

      group.add(india_mesh);
      group.add(germany_mesh);
      group.add(america_mesh);
      group.add(canada_mesh);
      group.add(uk_mesh);
      group.add(australia_mesh);
      group.add(sweden_mesh);
      group.add(perth_mesh);
      group.add(goldCoast_mesh);
      group.add(sydney_mesh);
      group.add(ethopia_mesh);
      group.add(nigeria_mesh);
      group.add(southAfrica_mesh);
      group.add(zimbabwe_mesh);
      group.add(shanghai_mesh);
      group.add(mangolia_mesh);


      function getCurve(p1, p2) {
         let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
         let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);

         let points = [];
         for (let i = 0; i <= 20; i++) {
            let p = new THREE.Vector3().lerpVectors(v1, v2, i / 20);
            p.normalize(3);
            p.multiplyScalar(1 + 0.05 * Math.sin(Math.PI * (i / 20)));
            points.push(p);
         }

         let path = new THREE.CatmullRomCurve3(points);

         const material = new THREE.LineDashedMaterial({
            color: 0xFDAF4D,
            // 0xFFD700   0xFDAF4D 0xFFFFFF
            linewidth: 5,
            scale: 1,
            dashSize: 6,  // Increase this value to make dashes wider
            gapSize: 1,

         });

         const geometry = new THREE.BufferGeometry().setFromPoints(path.getPoints(100));

         const dashedLine = new THREE.LineSegments(geometry, material);

         scene.add(dashedLine);
         group.add(dashedLine);
         group.rotation.set(-Math.PI / 22, 0, 0)
         let time = 0;

         function animate() {
            requestAnimationFrame(animate);
            group.rotation.y += 0.0003;
            time += 0.08;

            if (time >= 1) {
               time = 0;

            }

            for (let i = 0; i <= 20; i++) {
               let p = new THREE.Vector3().lerpVectors(v1, v2, (i + time) / 20);
               p.normalize(3);
               p.multiplyScalar(1 + 0.3 * Math.sin(Math.PI * ((i + time) / 20)));
               points[i].copy(p);
            }

            path.points = points;

            geometry.setFromPoints(path.getPoints(100));

            scene.add(group);
         }

         animate();
      }

      //camera: the thing you are goona seen on the screen is what the camera is looking at
      // perspectiveCamera(fieldOfView,aspectRatio)
      const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
      camera.position.z = 3.5;
      scene.add(camera);


      // renderer
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer(
         {
            canvas,
            antialias: true
         }
      );
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(sizes.width, sizes.height);
      // #030569
      renderer.setClearColor(0x1a50ba
      );
      //0x030569 0xFFFFFF  0x5669b3 0x1a50ba
      // document.addEventListener('DOMContentLoaded', function() {
      //    const container = document.querySelector('.webgl');
      // container.style.backgroundColor = 'rgba(3, 5, 105, 1)';
      // });

      //light 
      // const light = new THREE.PointLight(0xffffff,70,100,1.7);
      // light.position.set(0,0,100);
      // scene.add(light);
      const directionalLight = new THREE.DirectionalLight(0x111111, 1);
      directionalLight.position.set(0, 0, 100).normalize(); // Example direction (adjust as needed)
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0x999999); // Soft white light
      scene.add(ambientLight);

      // const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
      // scene.add(ambientLight);

      renderer.shadowMap.enabled = true; // Enable shadow mapping
      mesh.castShadow = true; // Set the mesh to cast shadows
      //ground.receiveShadow = true; // Set the ground (if any) to receive shadows

      // resizing
      window.addEventListener('resize', () => {
         //update sizes
         sizes.width = window.innerWidth;
         sizes.height = window.innerHeight;

         //update camera
         camera.aspect = sizes.width / sizes.height;
         renderer.setSize(sizes.width, sizes.height);
         camera.updateProjectionMatrix()

      })

      //controls
      OrbitControls.enabled = false;


      function animate() {
         // Update your animations or interactions here
         // uniforms.time.value += 0.01;
         material.dashOffset -= 0.01;
         // Render the scene with the camera
         renderer.render(scene, camera);

         // Call animate again on the next frame
         requestAnimationFrame(animate);
      }




      animate();


   }, []);

   return <canvas ref={canvasRef} />;
};

export default ThreeComponent;
